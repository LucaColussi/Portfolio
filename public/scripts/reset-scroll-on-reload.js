(() => {
  const navigation = performance.getEntriesByType("navigation")[0];
  if (navigation?.type !== "reload") return;

  const previousRestoration = history.scrollRestoration;
  history.scrollRestoration = "manual";

  // Preserve Next.js history state while removing a stale section anchor on refresh.
  if (location.hash) {
    history.replaceState(history.state, "", location.pathname + location.search);
  }

  const reset = () => {
    // A restored section focus must not pull the page back down after a refresh.
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  const finish = () => {
    reset();
    requestAnimationFrame(() => {
      reset();
      history.scrollRestoration = previousRestoration;
    });
  };

  reset();
  if (document.readyState === "complete") {
    finish();
  } else {
    window.addEventListener("pageshow", finish, { once: true });
  }
})();
