/**
 * Minimal pathname-based client router — no dependency, and it stays out of the
 * way of the site's existing `#anchor` scroll navigation (which lives in the hash).
 *
 * `navigate("/journal/foo")` pushes a history entry and notifies listeners;
 * `usePath()` re-renders the app when the path changes (link click or back/forward).
 */
import { useEffect, useState } from "react";

export function navigate(to: string) {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function usePath() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return path;
}
