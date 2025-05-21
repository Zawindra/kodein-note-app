import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";

export default function App() {
  const loadNotes = () => JSON.parse(localStorage.getItem("notes") || []);
  const [notes, setNotes] = useState(loadNotes);
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    setFilteredNotes(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setFilteredNotes(notes);
    } else {
      setFilteredNotes(
        notes.filter((note) =>
          note.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onSearch={handleSearch} />
      <Notes notes={filteredNotes} setNotes={setNotes} />
    </div>
  );
}
