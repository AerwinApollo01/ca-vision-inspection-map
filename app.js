/**
 * California AI Visual Inspection — opportunity map UI.
 * Pure vanilla JS, no dependencies. Reads window.COMPANIES from data.js.
 */
(function () {
  "use strict";

  var companies = window.COMPANIES || [];
  var fitRank = { "Very High": 0, "High": 1 };

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

  function render() {
    var list = getFiltered();
    els.count.textContent = list.length + (list.length === 1 ? " account" : " accounts") + " shown";
    els.empty.hidden = list.length !== 0;

    els.results.innerHTML = list.map(function (c) {
      var fitClass = c.fit === "Very High" ? "very" : "high";
      var typeClass = "type-" + c.type;
      return (
        '<article class="card">' +
          '<div class="card-top">' +
            "<div>" +
              "<h3>" + escapeHtml(c.name) + "</h3>" +
              '<p class="loc">' + escapeHtml(c.city) + " &middot; " + escapeHtml(c.region) + "</p>" +
            "</div>" +
            '<span class="fit ' + fitClass + '">' + escapeHtml(c.fit) + " fit</span>" +
          "</div>" +
          '<p class="use">' + escapeHtml(c.use) + "</p>" +
          '<div class="tags">' +
            '<span class="tag">' + escapeHtml(c.vertical) + "</span>" +
            '<span class="tag type-badge ' + typeClass + '">' + escapeHtml(c.type) + "</span>" +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  function init() {
    fillSelect(els.vertical, uniqueSorted("vertical"), "All industries");
    fillSelect(els.region, uniqueSorted("region"), "All regions");
    fillSelect(els.type, uniqueSorted("type"), "All types");
    renderMetrics();
    render();

    ["input", "change"].forEach(function (evt) {
      els.search.addEventListener(evt, render);
    });
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
