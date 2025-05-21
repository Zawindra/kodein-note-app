import { useState } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

export default function Notes({notes,setNotes }) {

  const formatDate = (dateObj) => {
    return dateObj.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const onAdd = (title, content) => {
    const newNote = {
      id: new Date().getTime(),
      title:title,
      content: content,
      archived: false,
      createAt: new Date().toISOString(),
      date: `~${formatDate(new Date())}`,
    };
    setNotes([newNote, ...notes]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleToggleArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const contentIdeas = notes.filter((note) => !note.archived);
  const contentSave = notes.filter((note) => note.archived);

  return (
    <div className="flex flex-col gap-10">
      <NoteForm onAdd={onAdd} />
      <NoteList
        contentIdeas={contentIdeas}
        contentSave={contentSave}
        onDelete={handleDeleteNote}
        onToggleArchive={handleToggleArchive}
      />
    </div>
  );
}