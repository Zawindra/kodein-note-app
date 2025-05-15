import { useState } from "react";

export default function NoteForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Please fill in all fields");
      return;
    }
    onAdd(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[700px] mx-auto mt-28 space-y-6"
    >
      <div>
        <label className="block text-base font-medium mb-2 text-gray-800">
          Title
        </label>
        <input
          type="text"
          placeholder="Type here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-base font-medium mb-2 text-gray-800">
          Content
        </label>
        <textarea
          placeholder="Type here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-3 h-36 resize-none text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
  type="submit"
  className="w-full bg-[#1B80C7] hover:bg-[#176FAB] text-white font-semibold py-3 rounded-md transition duration-200"
>
  Add Note
</button>
    </form>
  );
}
