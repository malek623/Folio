import { useDispatch, useSelector } from "react-redux";
import { setSearch, setCategory, setSort, resetFilters } from "../store/actions";
import { categories, selectFilters } from "../store/selectors";

export default function Toolbar() {
  const dispatch = useDispatch();
  const { search, category, sort } = useSelector(selectFilters);
  const isFiltered = search !== "" || category !== "All" || sort !== "default";

  return (
    <section className="toolbar" aria-label="Search and filters">
      <div className="toolbar-row">
        <input
          type="search"
          className="input"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          aria-label="Search books"
        />
        <select
          className="input select"
          value={sort}
          onChange={(e) => dispatch(setSort(e.target.value))}
          aria-label="Sort books"
        >
          <option value="default">Sort: Featured</option>
          <option value="title">Title A–Z</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="rating">Best rated</option>
        </select>
        {isFiltered && (
          <button className="btn ghost" onClick={() => dispatch(resetFilters())}>
            Clear filters
          </button>
        )}
      </div>

      <div className="chips" role="group" aria-label="Categories">
        {categories.map((c) => (
          <button
            key={c}
            className={`chip ${category === c ? "selected" : ""}`}
            onClick={() => dispatch(setCategory(c))}
            aria-pressed={category === c}
          >
            {c}
          </button>
        ))}
      </div>
    </section>
  );
}
