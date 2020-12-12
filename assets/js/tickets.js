require("bootstrap");
const createEl = require("./domMethods");
$(document).ready(function () {
  if (
    ((dateConverter = function (e) {
      const t = new Date(e),
        a = t.getFullYear();
      return (
        [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ][t.getMonth()] +
        " " +
        t.getDate() +
        ", " +
        a
      );
    }),
    window.location.href.indexOf("tickets") > -1)
  ) {
    const t = document.getElementById("purchaseBtn"),
      a = document.getElementById("purchaseEmail"),
      i = document.querySelector(".modal-content"),
      o = document.querySelector(".modal-body"),
      r = document.querySelector(".modal-footer");
    t.addEventListener("click", function () {
      i.removeChild(o),
        i.removeChild(r),
        i.append(
          e(
            "div",
            { class: "modal-body" },
            e(
              "h5",
              { class: "modal-title" },
              `Thanks for requesting a ticket purchase! We will send an email to ${a.value} to complete the order form!`
            )
          )
        );
    });
  }
});
