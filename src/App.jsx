
import StudentList from "./components/StudentList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-blue-700">
          Student List
        </h1>

        <p className="mb-8 text-center text-gray-600">
          Student records fetched from a dummy API
        </p>

        <StudentList />
      </div>
    </div>
  );
}

export default App;
