import { useQuery } from "@tanstack/react-query";
import NoteList from "../NoteList/NoteList";
import css from "./App.module.css";
import { fetchNotes } from "../../services/noteService";
import { useState } from "react";
import NoteForm from "../NoteForm/NoteForm";
import Modal from "../Modal/Modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const { data } = useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });
  console.log(data);

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {/* Компонент SearchBox */}
        {/* Пагінація */}
        {
          <button className={css.button} onClick={toggleModal}>
            Create note +
          </button>
        }
      </header>
      {data?.notes.length > 0 && <NoteList notes={data?.notes || []} />}
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <NoteForm onClose={toggleModal} />
        </Modal>
      )}
    </div>
  );
}
