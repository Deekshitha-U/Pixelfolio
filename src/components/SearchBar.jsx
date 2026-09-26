import { Search, X } from "lucide-react";

function SearchBar({ value, onChange, searchRef }) {
  return (
    <div className="search-wrapper">
      <Search size={20} />

      <input
        ref={searchRef}
        type="text"
        placeholder="Search images, places, moods..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      {value && (
        <button
          className="search-clear"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;