/**
 * California AI Visual Inspection — opportunity map UI.
 * Vanilla JS + Leaflet. Reads window.COMPANIES and window.CITY_COORDS from data.js.
 * One filtered set drives both the map markers and the card list.
 */
(function () {
  "use strict";

  var companies = window.COMPANIES || [];
  var coords = window.CITY_COORDS || {};
  var fitRank = { "Very High": 0, "High": 1 };
  var FIT_COLORS = { "Very High": "#0f6e56", "High": "#185fa5" };

  var els = {
    results: document.getElementById("results"),
    metrics: document.getElementById("metrics"),
    count: document.getElementById("result-count"),
    empty: document.getElementById("empty"),
    search: document.getElementById("search"),
    vertical: document.getElementById("vertical"),
    region: document.getElementById("region"),
    type: document.getElementById("type"),
    sort: document.getElementById("sort"),
    reset: document.getElementById("reset")
  };

  var map = null, cluster = null;

  function uniqueSorted(key) {
    var seen = {};
    companies.forEach(function (c) { seen[c[key]] = true; });
    return Object.keys(seen).sort();
  }

  function fillSelect(select, values, allLabel) {
    var opts = ['<option value="">' + allLabel + "</option>"];
    values.forEach(function (v) { opts.push('<option value="' + v + '">' + v + "</option>"); });
    select.innerHTML = opts.join("");
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch];
    });
  }

  function getFiltered() {
    var q = els.search.value.trim().toLowerCase();
    var v = els.vertical.value, r = els.region.value, t = els.type.value;

    var list = companies.filter(function (c) {
      if (v && c.vertical !== v) return false;
      if (r && c.region !== r) return false;
      if (t && c.type !== t) return false;
      if (q && (c.name + " " + c.city).toLowerCase().indexOf(q) === -1) return false;
      return true;
    });

    var sort = els.sort.value;
    list.sort(function (a, b) {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "region") return a.region.localeCompare(b.region) || a.name.localeCompare(b.name);
      return (fitRank[a.fit] - fitRank[b.fit]) || a.name.localeCompare(b.name);
    });
    return list;
  }

  function renderMetrics() {
    var total = companies.length;
    var enterprise = companies.filter(function (c) { return c.type === "Enterprise"; }).length;
    var startups = companies.filter(function (c) { return c.type === "Startup/Scale-up"; }).length;
    var verticals = uniqueSorted("vertical").length;
    var cards = [
      [total, "Companies & clusters"],
      [enterprise, "Fortune 500 / enterprise"],
      [startups, "Startups & scale-ups"],
      [verticals, "Industries"]
    ];
    els.metrics.innerHTML = cards.map(function (c) {
      return '<div class="metric"><div class="num">' + c[0] + '</div><div class="lbl">' + c[1] + "</div></div>";
    }).join("");
  }

  function detailHtml(c) {
    var fitClass = c.fit === "Very High" ? "very" : "high";
    var typeClass = "type-" + c.type;
    return (
      '<div class="card-top">' +
        "<div>" +
          "<h3>" + escapeHtml(c.name) + "</h3>" +
          '<p class="loc">' + escapeHtml(c.city) + " &middot; " + escapeHtml(c.region) + "</p>" +
        "</div>" +
        '<span class="fit ' + fitClass + '">' + escapeHtml(c.fit) + " fit</span>" +
      "</div>" +
      '<p class="use">' + escapeHtml(c.use) + "</p>" +
      '<div class="detail"><span class="dlabel">Why this fit</span><p>' + escapeHtml(c.why) + "</p></div>" +
      '<div class="detail"><span class="dlabel win">How to win</span><p>' + escapeHtml(c.win) + "</p></div>" +
      '<div class="tags">' +
        '<span class="tag">' + escapeHtml(c.vertical) + "</span>" +
        '<span class="tag type-badge ' + typeClass + '">' + escapeHtml(c.type) + "</span>" +
      "</div>"
    );
  }

  function renderCards(list) {
    els.results.innerHTML = list.map(function (c) {
      return '<article class="card">' + detailHtml(c) + "</article>";
    }).join("");
  }

  function jitter(latlng, key) {
    // Deterministic small offset so multiple companies in one city fan out.
    var h = 0;
    for (var i = 0; i < key.length; i++) { h = (h * 31 + key.charCodeAt(i)) % 1000; }
    var a = (h / 1000) * Math.PI * 2;
    var d = 0.012 + (h % 7) * 0.0016;
    return [latlng[0] + Math.sin(a) * d, latlng[1] + Math.cos(a) * d];
  }

  function renderMap(list) {
    if (!cluster) return;
    cluster.clearLayers();
    list.forEach(function (c) {
      var base = coords[c.city];
      if (!base) return;
      var pos = jitter(base, c.name);
      var marker = L.circleMarker(pos, {
        radius: 7, weight: 1.5, color: "#fff",
        fillColor: FIT_COLORS[c.fit] || "#888", fillOpacity: 0.9
      });
      marker.bindPopup(
        '<div class="popup">' +
          "<strong>" + escapeHtml(c.name) + "</strong>" +
          '<span class="popup-loc">' + escapeHtml(c.city) + " &middot; " + escapeHtml(c.fit) + " fit</span>" +
          "<p>" + escapeHtml(c.use) + "</p>" +
          '<p><b>Why:</b> ' + escapeHtml(c.why) + "</p>" +
          '<p><b>Win:</b> ' + escapeHtml(c.win) + "</p>" +
        "</div>"
      );
      marker.bindTooltip(c.name, { direction: "top" });
      cluster.addLayer(marker);
    });
  }

  function render() {
    var list = getFiltered();
    els.count.textContent = list.length + (list.length === 1 ? " account" : " accounts") + " shown";
    els.empty.hidden = list.length !== 0;
    renderCards(list);
    renderMap(list);
  }

  function initMap() {
    if (typeof L === "undefined") return; // graceful fallback: cards still work
    var dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    map = L.map("map", { scrollWheelZoom: false }).setView([36.5, -119.4], 6);
    var style = dark ? "dark_all" : "light_all";
    L.tileLayer("https://{s}.basemaps.cartocdn.com/" + style + "/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: "abcd", maxZoom: 19
    }).addTo(map);
    cluster = L.markerClusterGroup({ spiderfyOnMaxZoom: true, showCoverageOnHover: false, maxClusterRadius: 45 });
    map.addLayer(cluster);
  }

  function init() {
    fillSelect(els.vertical, uniqueSorted("vertical"), "All industries");
    fillSelect(els.region, uniqueSorted("region"), "All regions");
    fillSelect(els.type, uniqueSorted("type"), "All types");
    renderMetrics();
    initMap();
    render();

    els.search.addEventListener("input", render);
    [els.vertical, els.region, els.type, els.sort].forEach(function (el) {
      el.addEventListener("change", render);
    });
    els.reset.addEventListener("click", function () {
      els.search.value = "";
      els.vertical.value = "";
      els.region.value = "";
      els.type.value = "";
      els.sort.value = "fit";
      render();
    });
  }

  init();
})();
