import mediumZoom from "medium-zoom/dist/medium-zoom.js";

document.addEventListener("lazybeforeunveil", (_) => {
  mediumZoom("#zoom-default", {
    margin: 70,
    background: "rgba(00, 00, 00, .3)",
    scrollOffset: 0,
  });
});
