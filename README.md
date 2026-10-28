# Folio

**Student name:** MALEK Fatma zohra
**Group:** ss-G1
**Module:** WAMD – TD/TP 2 (ENSTA, SS/IA, 2026)
**Store name:** Folio

## Application description

Folio is a small online bbok store built with React and Redux. Visitors can browse a catalog of books, search and filter it, open a book's details, save favorites, and manage a shopping cart whose content is shared across the whole application through a Redux store.

## Technologies used

- React (JSX, function components, hooks)
- Redux 5 (actions, reducers, store) and React-Redux 9 (`Provider`, `useSelector`, `useDispatch`)
- `@reduxjs/toolkit`
- Vite 5 (dev server and build)
- JavaScript (ES6+), CSS
- Node.js / npm, Git / GitHub

## Project structure

```
src/
  data/books.js          Book data 
  store/
    actionTypes.js       Action type constants
    actions.js           Action creators
    reducers.js          cart, favorites, filters and theme reducers
    selectors.js         Functions that read/derive data from the state
    persist.js           localStorage load/save
    index.js             Redux store
  components/            Reusable React components
  App.jsx                Root component
  main.jsx               Entry point (wraps the app in <Provider>)
  styles.css             Styles (light and dark themes)
```

## Main React components

| Component                 | Role                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------- |
| `Header`                  | Store name, favorites toggle, theme switch, cart button with item count             |
| `Toolbar`                 | Search field, sort menu, category chips                                             |
| `BookList`                | Reads the filtered books from Redux and renders the grid or an empty state          |
| `BookCard`                | One book: cover, info, favorite and add-to-cart buttons (props: `book`, `onSelect`) |
| `BookCover`               | Real image                                                                          |
| `BookDetails`             | Modal with full book information                                                    |
| `AddToCartButton`         | Dispatches `addToCart`; local state shows an "Added" confirmation                   |
| `FavoriteButton`          | Dispatches `toggleFavorite`                                                         |
| `CartDrawer` / `CartItem` | Cart list, quantity controls, remove, total, empty cart                             |
| `Price`, `Footer`         | Small presentational components                                                     |

## Redux state managed by the application

```js
{
  cart:      { items: [{ id, qty }] },
  favorites: { ids: [bookId, ...] },
  filters:   { search: "", category: "All", sort: "default" },
  theme:     { mode: "light" | "dark" }
}
```

**Actions:** `addToCart`, `removeFromCart`, `increaseQty`, `decreaseQty`, `clearCart`, `toggleFavorite`, `setSearch`, `setCategory`, `setSort`, `resetFilters`, `toggleTheme`.

Cart, favorites and theme are saved in `localStorage` and restored on reload.

## Implemented features

Required: product catalog, product information, product details, add to cart, remove from cart, live cart updates, Redux store / actions / reducers, React-Redux (`useSelector`, `useDispatch`), responsive interface.

Optional: search, category filtering, sorting, quantity management, cart total, favorites, discount display, dark/light mode, local storage.

## Running the application

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev       # development server at http://localhost:5173
npm run build     # production build in /dist
npm run preview   # preview the production build
```
