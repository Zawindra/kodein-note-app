import NoteItem from "./NoteItem";
import React from "react";

export default function NoteList({ contentIdeas, contentSave, onDelete, onToggleArchive }) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 pb-24 pt-10">
      {/* Active Section */}
      <div className="flex items-center gap-3 mb-6">
        <img src="/Active.svg" alt="Active" className="w-5 h-5" />
        <h1 className="text-2xl font-semibold text-gray-800">Active</h1>
      </div>

      {contentIdeas.length === 0 ? (
        <p className="text-gray-500 italic mb-6">No active notes available.</p>
      ) : (
        <div className="flex gap-6 flex-wrap justify-center sm:justify-start">
          {contentIdeas.map((idea) => (
            <NoteItem
              key={idea.id}
              idea={idea}
              img="/Save.svg"
              colorClass="bg-[#0F7ECD]"
              onDelete={onDelete}
              onToggleArchive={onToggleArchive}
            />
          ))}
        </div>
      )}

      {/* Archive Section */}
      <div className="flex items-center gap-3 mb-6 mt-10">
        <img src="/Archive.svg" alt="Archive" className="w-6 h-6" />
        <h1 className="text-2xl font-semibold text-gray-800">Archive</h1>
      </div>

      {contentSave.length === 0 ? (
        <p className="text-gray-500 italic">No archived notes available.</p>
      ) : (
        <div className="flex gap-6 flex-wrap justify-center sm:justify-start">
          {contentSave.map((idea) => (
            <NoteItem
              key={idea.id}
              idea={idea}
              img="/MoveBack.svg"
              colorClass="bg-[#D9D9D9]"
              onDelete={onDelete}
              onToggleArchive={onToggleArchive}
            />
          ))}
        </div>
      )}
    </div>
  );
}
