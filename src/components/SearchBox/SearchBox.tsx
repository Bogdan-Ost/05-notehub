import css from "./SearchBox.module.css";
interface SearchBoxProps {
  text: string;
  onSearch: (newSearchQuery: string) => void;
}

export default function SearchBox({ text, onSearch }: SearchBoxProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    onSearch(e.target.value);

  return (
    <input
      className={css.input}
      defaultValue={text}
      onChange={handleSearch}
      type="text"
      placeholder="Search notes"
    />
  );
}
