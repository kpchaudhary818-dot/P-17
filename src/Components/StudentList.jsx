
import { useEffect, useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch student data");
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load students. Please try again.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-center text-lg text-blue-600">
        Loading students...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-600">
        {error}
      </p>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">City</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b border-gray-200 hover:bg-blue-50"
              >
                <td className="px-4 py-3">{student.id}</td>
                <td className="px-4 py-3 font-medium text-gray-800">
                  {student.name}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {student.email}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {student.address.city}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="p-4 text-sm text-gray-500">
        Total students: {students.length}
      </p>
    </div>
  );
}

export default StudentList;
