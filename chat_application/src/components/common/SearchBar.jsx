import styles from "./SearchBar.module.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search chats..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className={styles.input}
      />
    </div>
  );
}

export default SearchBar;
