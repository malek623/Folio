import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/actions";
import { selectCartCount, selectFavoritesCount } from "../store/selectors";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

export default function Header({
  onOpenCart,
  onlyFavorites,
  onToggleFavorites,
}) {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const favCount = useSelector(selectFavoritesCount);
  const mode = useSelector((state) => state.theme.mode);

  return (
    <header className="header">
      <a className="brand" href="/" aria-label="Bookstore home">
        Folio
      </a>

      <nav className="header-actions">
        <button
          className={`btn ghost ${onlyFavorites ? "active" : ""}`}
          onClick={onToggleFavorites}
          aria-pressed={onlyFavorites}
        >
          <FaHeart /> <span className="count">{favCount}</span>
        </button>
        <button
          className="btn ghost"
          onClick={() => dispatch(toggleTheme())}
          aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
        >
          {mode === "light" ? <FaMoon /> : <MdLightMode />}
        </button>
        <button className="btn solid" onClick={onOpenCart}>
          <FaShoppingCart />
          <span className="count inverse">{cartCount}</span>
        </button>
      </nav>
    </header>
  );
}
