import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/actions";
import { selectQtyInCart } from "../store/selectors";

export default function AddToCartButton({ bookId, full = false }) {
  const dispatch = useDispatch();
  const qty = useSelector(selectQtyInCart(bookId));

  // Local state: short "Added" confirmation after clicking.
  const [justAdded, setJustAdded] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(addToCart(bookId));
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <button className={`btn solid ${full ? "full" : ""}`} onClick={handleClick}>
      {justAdded ? "Added" : qty > 0 ? `Add another (${qty} in cart)` : "Add to cart"}
    </button>
  );
}
