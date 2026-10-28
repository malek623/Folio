import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/actions";
import { selectIsFavorite } from "../store/selectors";

export default function FavoriteButton({ bookId }) {
  const dispatch = useDispatch();
  const isFav = useSelector(selectIsFavorite(bookId));

  return (
    <button
      className={`fav ${isFav ? "on" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(toggleFavorite(bookId));
      }}
      aria-pressed={isFav}
      aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path
          d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.7 5 6 5c2 0 3.3 1.1 4 2.2h4C14.7 6.1 16 5 18 5c3.3 0 5.1 3.4 3.6 6.8C19.5 16.4 12 21 12 21z"
          transform="translate(0 -.5)"
        />
      </svg>
    </button>
  );
}
