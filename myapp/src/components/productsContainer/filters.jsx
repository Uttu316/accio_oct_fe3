import styles from "./productsContainer.module.css";

const FILTERS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Beauty",
    value: "beauty",
  },
  {
    label: "Fragrances",
    value: "fragrances",
  },
  {
    label: "Furniture",
    value: "furniture",
  },
  {
    label: "Groceries",
    value: "groceries",
  },
];
const Filters = ({ filter, setFilter }) => {
  return (
    <div className={styles.filters}>
      {FILTERS.map((item, index) => (
        <FilterItem
          key={index}
          label={item.label}
          value={item.value}
          onFilter={setFilter}
          selected={filter}
        />
      ))}
    </div>
  );
};

const FilterItem = ({ label, onFilter, value, selected }) => {
  const isActive = selected === value;
  return (
    <button
      className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ""}`}
      onClick={() => onFilter(value)}
    >
      {label}
    </button>
  );
};

export default Filters;
