import { useState } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

export default function Notes() {
  const [contentIdeas, setContentIdeas] = useState([
    {
      id: 1,
      title: "Ide Konten",
      date: "~Selasa, 13 Mei 2025",
      tips: "Tips belajar React untuk pemula.",
    },
    {
      id: 2,
      title: "Ide Konten",
      date: "~Selasa, 13 Mei 2025",
      tips: "Tips belajar React untuk pemula.",
    },
  ]);

  const [contentSave, setContentSave] = useState([
    {
      id: 1,
      title: "Ide Konten",
      date: "~Selasa, 13 Mei 2025",
      tips: "Tips belajar React untuk pemula.",
    },
    {
      id: 2,
      title: "Ide Konten",
      date: "~Selasa, 13 Mei 2025",
      tips: "Tips belajar React untuk pemula.",
    },
  ]);

  const onAdd = (title, content) => {
    const newIdea = {
      id: contentIdeas.length + 1,
      title,
      date: "~Selasa, 13 Mei 2025",
      tips: content,
    };
    setContentIdeas([...contentIdeas, newIdea]);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = contentIdeas.filter((note) => note.id !== id);
    setContentIdeas(updatedNotes);
  };

  return (
    <div className="flex flex-col gap-10">
      <NoteForm onAdd={onAdd} />
      <NoteList
        contentIdeas={contentIdeas}
        contentSave={contentSave}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}
