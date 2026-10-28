import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/actions";
import { selectCartItems, selectCartCount, selectCartTotal } from "../store/selectors";
import { formatPrice } from "./Price";
import CartItem from "./CartItem";

export default function CartDrawer({ open, onClose }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      <div className={`scrim ${open ? "show" : ""}`} onClick={onClose} />
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open} aria-label="Shopping cart">
        <div className="drawer-head">
          <h2>Your cart {count > 0 && <span className="muted">({count})</span>}</h2>
          <button className="close static" onClick={onClose} aria-label="Close cart">×</button>
        </div>

        {items.length === 0 ? (
          <div className="empty small">
            <h3>Your cart is empty</h3>
            <p>Add a book from the shelves and it will show up here.</p>
            <button className="btn solid" onClick={onClose}>Keep browsing</button>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
            <div className="drawer-foot">
              <div className="total">
                <span>Total</span>
                <strong>{formatPrice(total)}</strong>
              </div>
            
              <button className="link center" onClick={() => dispatch(clearCart())}>
                Empty cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
