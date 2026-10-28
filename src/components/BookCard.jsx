import BookCover from "./BookCover";
import Price from "./Price";
import FavoriteButton from "./FavoriteButton";
import AddToCartButton from "./AddToCartButton";

// Props: book (data object) and onSelect (function called when the card is opened).
export default function BookCard({ book, onSelect }) {
  return (
    <article className="card">
      <div className="card-cover">
        <button
          className="card-open"
          onClick={() => onSelect(book)}
          aria-label={`View details for ${book.title}`}
        >
          <BookCover book={book} />
        </button>
        <FavoriteButton bookId={book.id} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{book.title}</h3>
        <p className="card-author">{book.author}</p>
        <p className="card-meta">
          <span className="rating" aria-label={`Rated ${book.rating} out of 5`}>★ {book.rating.toFixed(1)}</span>
          <span>{book.category}</span>
        </p>
        <Price book={book} />
        <AddToCartButton bookId={book.id} full />
      </div>
    </article>
  );
}
