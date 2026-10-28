export const formatPrice = (n) => `${n.toLocaleString("en-US")} DA`;

export default function Price({ book }) {
  const hasDiscount = book.oldPrice && book.oldPrice > book.price;
  const percent = hasDiscount ? Math.round((1 - book.price / book.oldPrice) * 100) : 0;
  return (
    <span className="price">
      <strong>{formatPrice(book.price)}</strong>
      {hasDiscount && (
        <>
          <s>{formatPrice(book.oldPrice)}</s>
          <span className="badge">−{percent}%</span>
        </>
      )}
    </span>
  );
}
