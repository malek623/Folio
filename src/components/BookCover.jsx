// Shows the real image if the book has one, otherwise a generated cover.
export default function BookCover({ book, size = "md" }) {
  if (book.image) {
    return (
      <div className={`cover cover-${size}`}>
        <img src={book.image} alt={`Cover of ${book.title}`} loading="lazy" />
      </div>
    );
  }
  const [a, b] = book.cover || ["#12403a", "#0a1f1c"];
  return (
    <div
      className={`cover cover-${size}`}
      style={{ background: `linear-gradient(150deg, ${a}, ${b})` }}
      role="img"
      aria-label={`Cover of ${book.title} by ${book.author}`}
    >
      <span className="cover-spine" />
      <span className="cover-title">{book.title}</span>
      <span className="cover-author">{book.author}</span>
    </div>
  );
}
