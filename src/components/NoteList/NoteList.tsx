import { useMutation } from "@tanstack/react-query";
import css from "./NoteList.module.css";
import { deleteNote } from "../../services/noteService";
import type { Note } from "../../types/note";

export interface NoteListProps {
  notes: Note[];
  totalPages?: number;
}

export default function NoteList({ notes }: NoteListProps) {
  const { mutate } = useMutation({
    mutationFn: deleteNote,
  });

  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            <button className={css.button} onClick={() => mutate(note.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
