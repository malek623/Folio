import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../store/actions";
import { formatPrice } from "./Price";
import BookCover from "./BookCover";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <li className="cart-item">
      <BookCover book={item} size="sm" />
      <div className="cart-item-info">
        <h3>{item.title}</h3>
        <p className="card-author">{item.author}</p>
        <div className="qty">
          <button onClick={() => dispatch(decreaseQty(item.id))} aria-label={`Decrease quantity of ${item.title}`}>−</button>
          <span aria-live="polite">{item.qty}</span>
          <button onClick={() => dispatch(increaseQty(item.id))} aria-label={`Increase quantity of ${item.title}`}>+</button>
        </div>
      </div>
      <div className="cart-item-end">
        <strong>{formatPrice(item.price * item.qty)}</strong>
        <button className="link" onClick={() => dispatch(removeFromCart(item.id))}>
          Remove
        </button>
      </div>
    </li>
  );
}
