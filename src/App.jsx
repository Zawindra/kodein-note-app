import Navbar from "./components/Navbar";
import Notes from "./components/Notes";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Notes />
    </div>
  );
}
