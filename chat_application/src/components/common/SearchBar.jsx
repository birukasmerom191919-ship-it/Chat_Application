import styles from "./SearchBar.module.css";

function SearchBar({ search, setSearch }) {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search chats..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
