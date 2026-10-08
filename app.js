/* DevinSoto.com — section tabs.
   Cards stay in the HTML, so every link works with JavaScript off.
   With JavaScript, the jump links become a tablist. */
(function () {
    var root = document.querySelector("[data-tabs]");
    if (!root) return;

    var tablist = root.querySelector("[data-tablist]");
    var tabs = Array.prototype.slice.call(root.querySelectorAll("[data-tab]"));
    var panels = Array.prototype.slice.call(root.querySelectorAll("[data-panel]"));
    if (!tablist || !tabs.length || !panels.length) return;

    var byId = {};
    panels.forEach(function (panel) {
        byId[panel.id] = panel;
    });

    tablist.setAttribute("role", "tablist");
    tablist.setAttribute("aria-orientation", "horizontal");

    tabs.forEach(function (tab) {
        var id = tab.getAttribute("data-tab");
        tab.id = "tab-" + id;
        tab.setAttribute("role", "tab");
        tab.setAttribute("aria-controls", id);
        var panel = byId[id];
        if (!panel) return;
        panel.setAttribute("role", "tabpanel");
        panel.setAttribute("aria-labelledby", tab.id);
        var heading = panel.querySelector(".hub__section-label");
        if (heading) heading.setAttribute("aria-hidden", "true");
    });

    function select(id, focusTab, updateHash) {
        if (!byId[id]) id = panels[0].id;
        document.documentElement.setAttribute("data-panel", id);

        tabs.forEach(function (tab) {
            var on = tab.getAttribute("data-tab") === id;
            tab.setAttribute("aria-selected", on ? "true" : "false");
            tab.tabIndex = on ? 0 : -1;
            if (on && focusTab) tab.focus();
        });

        panels.forEach(function (panel) {
            if (panel.id === id) panel.removeAttribute("hidden");
            else panel.setAttribute("hidden", "");
        });

        if (updateHash && history.pushState && location.hash !== "#" + id) {
            history.pushState(null, "", "#" + id);
        }
    }

    function idFromHash() {
        var id = (location.hash || "").replace(/^#/, "");
        return byId[id] ? id : panels[0].id;
    }

    select(idFromHash(), false, false);

    tabs.forEach(function (tab) {
        tab.addEventListener("click", function (event) {
            event.preventDefault();
            select(tab.getAttribute("data-tab"), false, true);
        });
    });

    tablist.addEventListener("keydown", function (event) {
        var index = tabs.indexOf(document.activeElement);
        if (index === -1) return;

        var next = -1;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % tabs.length;
        else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = tabs.length - 1;
        else if (event.key === " " || event.key === "Enter") {
            event.preventDefault();
            select(tabs[index].getAttribute("data-tab"), false, true);
            return;
        } else return;

        event.preventDefault();
        select(tabs[next].getAttribute("data-tab"), true, true);
    });

    window.addEventListener("popstate", function () {
        select(idFromHash(), false, false);
    });
})();
