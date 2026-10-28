import books from "../data/books";

// Selectors read data from the Redux state (and combine it with the books data file).

export const selectCartItems = (state) =>
  state.cart.items
    .map((item) => {
      const book = books.find((b) => b.id === item.id);
      return book ? { ...book, qty: item.qty } : null;
    })
    .filter(Boolean);

export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.qty, 0);

export const selectCartTotal = (state) =>
  selectCartItems(state).reduce((sum, item) => sum + item.price * item.qty, 0);

export const selectQtyInCart = (id) => (state) =>
  state.cart.items.find((item) => item.id === id)?.qty ?? 0;

export const selectIsFavorite = (id) => (state) => state.favorites.ids.includes(id);

export const selectFavoritesCount = (state) => state.favorites.ids.length;

export const selectFilters = (state) => state.filters;

export const selectVisibleBooks = (state) => {
  const { search, category, sort } = state.filters;
  const q = search.trim().toLowerCase();

  let result = books.filter((b) => {
    const matchCategory = category === "All" || b.category === category;
    const matchSearch = !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  switch (sort) {
    case "price-asc":
      return [...result].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...result].sort((a, b) => b.price - a.price);
    case "rating":
      return [...result].sort((a, b) => b.rating - a.rating);
    case "title":
      return [...result].sort((a, b) => a.title.localeCompare(b.title));
    default:
      return result;
  }
};

export const categories = ["All", ...new Set(books.map((b) => b.category))];
