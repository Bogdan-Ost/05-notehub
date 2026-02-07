import { useQuery } from "@tanstack/react-query";
import NoteList from "../NoteList/NoteList";
import css from "./App.module.css";
import { fetchNotes } from "../../services/noteService";

export default function App() {
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

        {<button className={css.button}>Create note +</button>}
        <NoteList notes={data?.notes || []} />
      </header>
    </div>
  );
}
