import axios from "axios";
import type { Note, NoteId } from "../types/note";
const baseURL = "https://notehub-public.goit.study/api";
const token = import.meta.env.VITE_NOTEHUB_TOKEN;
interface settingProps {
  params: { page: number };

  headers: { Authorization: string };
}
const setting: settingProps = {
  params: {
    page: 1,
  },
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

interface createNoteProps {
  noteData: {
    title: string;
    content: string;
    tag: string;
  };
}

export const fetchNotes = async () => {
  const { data } = await axios.get(`${baseURL}/notes`, setting);
  console.log(data);

  return data;
};

export const createNote = async ({ noteData }: createNoteProps) => {
  const { data } = await axios.post<Note>(
    `${baseURL}/notes`,
    noteData,
    setting,
  );
  return data;
};

export const deleteNote = async (id: NoteId) => {
  const { data } = await axios.delete<Note>(`${baseURL}/notes/${id}`, setting);
  return data;
};
