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

export const fetchNotes = async () => {
  const { data } = await axios.get(`${baseURL}/notes`, setting);
  console.log(data);

  return data;
};
export const createNote = () => {};
export const deleteNote = async (id: NoteId) => {
  const { data } = await axios.delete<Note>(`/notes${id}`);
  return data;
};
