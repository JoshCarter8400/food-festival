const createLoremIpsum = require("./helpers");
require("bootstrap");
const createEl = require("./domMethods");
$(document).ready(function () {
  if (window.location.href.indexOf("event") > -1) {
    const a = JSON.parse(localStorage.getItem("currentEvent")) || {
        title: "Title Placeholder",
        subtitle: "",
        description: "",
      },
      i = document.querySelector("#page"),
      o = e(
        "div",
        { class: "container" },
        e(
          "div",
          { class: "card mb-3" },
          e("img", {
            class: "card-img-top",
            style: "width: 5px",
            src: a.image || "https://via.placeholder.com/350x150",
          }),
          e(
            "div",
            { class: "card-body" },
            e("h1", { class: "card-title" }, a.title || ""),
            e("h2", { class: "text-muted" }, a.subtitle || ""),
            e("p", { class: "card-text mt-3" }, a.description || t(100)),
            e(
              "a",
              { class: "btn btn-primary", href: "tickets.html" },
              "Buy Tickets"
            )
          )
        )
      );
    i.appendChild(o);
  }
});
