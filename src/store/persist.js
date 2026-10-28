// Saves cart, favorites and theme in localStorage so they survive a page refresh.
const KEY = "bookstore-state-v1";

export function loadState() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : undefined;
  } catch {
    return undefined;
  }
}

export function saveState(state) {
  try {
    const { cart, favorites, theme } = state;
    localStorage.setItem(KEY, JSON.stringify({ cart, favorites, theme }));
  } catch {
    // storage unavailable: ignore
  }
}
