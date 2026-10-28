import { useEffect } from "react";
import BookCover from "./BookCover";
import Price from "./Price";
import FavoriteButton from "./FavoriteButton";
import AddToCartButton from "./AddToCartButton";

export default function BookDetails({ book, onClose }) {
  // Close with the Escape key.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={book.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close" onClick={onClose} aria-label="Close details">×</button>
        <BookCover book={book} size="lg" />
        <div className="modal-body">
          <h2>{book.title}</h2>
          <p className="card-author">by {book.author}</p>
          <p className="card-meta">
            <span className="rating">★ {book.rating.toFixed(1)}</span>
            <span>{book.category}</span>
            {book.year && <span>{book.year}</span>}
            {book.pages && <span>{book.pages} pages</span>}
          </p>
          <p className="description">{book.description}</p>
          <Price book={book} />
          <div className="modal-actions">
            <AddToCartButton bookId={book.id} />
            <FavoriteButton bookId={book.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
