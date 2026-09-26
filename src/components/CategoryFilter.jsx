const categories = [
  "All",
  "Nature",
  "Architecture",
  "City",
  "Travel",
  "Lifestyle",
  "Abstract",
];

function CategoryFilter({ selected, onChange }) {
  return (
    <div className="category-filter" id="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={selected === category ? "active" : ""}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;