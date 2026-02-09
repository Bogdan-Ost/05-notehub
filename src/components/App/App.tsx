import { useQuery, keepPreviousData } from "@tanstack/react-query";
import NoteList from "../NoteList/NoteList";
import css from "./App.module.css";
import { fetchNotes } from "../../services/noteService";
import { useState } from "react";
import NoteForm from "../NoteForm/NoteForm";
import Modal from "../Modal/Modal";
import SearchBox from "../SearchBox/SearchBox";
import { useDebouncedCallback } from "use-debounce";
import { Pagination } from "../Pagination/Pagination";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const debouncedSetSearchQuery = useDebouncedCallback((value: string) => {
    setSearchQuery(value);
  }, 500);

  const handleSearch = (value: string) => {
    setPage(1);
    debouncedSetSearchQuery(value);
  };

  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const { data, isLoading, isPlaceholderData } = useQuery({
    queryKey: ["notes", searchQuery, page],
    queryFn: () => fetchNotes(searchQuery, page),
    placeholderData: keepPreviousData,
  });
  const totalPages = data?.totalPages ?? 0;

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox text={searchQuery} onSearch={handleSearch} />
        {!isLoading && totalPages > 1 && (
          <Pagination
            pageCount={totalPages}
            forcePage={page}
            onPageChange={(selected) => {
              if (!isPlaceholderData) {
                setPage(selected);
              }
            }}
          />
        )}
        {
          <button className={css.button} onClick={toggleModal}>
            Create note +
          </button>
        }
      </header>
      {isLoading ||
        (data?.notes && data.notes.length > 0 && (
          <NoteList notes={data.notes} />
        ))}
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <NoteForm onClose={toggleModal} />
        </Modal>
      )}
    </div>
  );
}
