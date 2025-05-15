export default function NoteItem({ idea, img, colorClass, onDelete }) {
  return (
    <div
      key={idea.id}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow w-[320px] h-[180px] border border-gray-200"
    >
      <div className={`h-6 w-full rounded-t-xl ${colorClass}`}></div>
      <div className="p-5 flex flex-col justify-between h-[150px]">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold text-gray-900">{idea.title}</h1>
            <p className="text-sm text-gray-500">{idea.date}</p>
          </div>
          <div className="flex gap-2">
            <img
              src={img}
              alt="icon"
              className="cursor-pointer w-6 h-6 hover:scale-110 transition-transform duration-200"
            />
            <img
              src="/Trash.svg"
              alt="delete"
              className="cursor-pointer w-6 h-6 hover:scale-110 transition-transform duration-200"
              onClick={() => onDelete && onDelete(idea.id)} 
            />
          </div>
        </div>

        <h3 className="text-sm font-normal text-gray-700 mt-2">{idea.tips}</h3>
      </div>
    </div>
  );
}
