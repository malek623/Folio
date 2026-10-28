import { useDispatch, useSelector } from "react-redux";
import { resetFilters } from "../store/actions";
import { selectVisibleBooks } from "../store/selectors";
import BookCard from "./BookCard";

export default function BookList({ onlyFavorites, onSelect }) {
  const dispatch = useDispatch();
  const visible = useSelector(selectVisibleBooks);
  const favoriteIds = useSelector((state) => state.favorites.ids);

  const books = onlyFavorites ? visible.filter((b) => favoriteIds.includes(b.id)) : visible;

  if (books.length === 0) {
    return (
      <div className="empty">
        <h2>{onlyFavorites ? "No favorites here yet" : "No books match your search"}</h2>
        <p>
          {onlyFavorites
            ? "Tap the heart on a book to save it to this list."
            : "Try a different title, author or category."}
        </p>
        <button className="btn solid" onClick={() => dispatch(resetFilters())}>
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <>
      <p className="result-count">
        {books.length} {books.length === 1 ? "book" : "books"}
      </p>
      <div className="grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onSelect={onSelect} />
        ))}
      </div>
    </>
  );
}
