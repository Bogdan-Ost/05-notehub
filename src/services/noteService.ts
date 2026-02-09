import axios from "axios";
import type { Note, NoteId } from "../types/note";
const baseURL = "https://notehub-public.goit.study/api";
const token = import.meta.env.VITE_NOTEHUB_TOKEN;
interface settingProps {
  params: {
    page: number;
    search: string;
  };

  headers: { Authorization: string };
}

interface createNoteProps {
  noteData: {
    title: string;
    content: string;
    tag: string;
  };
}

export const fetchNotes = async (mysearchtext: string) => {
  const setting: settingProps = {
    params: {
      page: 1,
      search: mysearchtext,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(`${baseURL}/notes`, setting);

  return data;
};

export const createNote = async ({ noteData }: createNoteProps) => {
  const { data } = await axios.post<Note>(`${baseURL}/notes`, noteData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const deleteNote = async (id: NoteId) => {
  const { data } = await axios.delete<Note>(`${baseURL}/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
