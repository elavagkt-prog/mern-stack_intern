import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="flex flex-col md:flex-row">

        <Sidebar />

        <main className="flex-1 p-6">

          <h2 className="text-2xl font-bold mb-5">
            Dashboard
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            <div className="bg-white p-6 rounded-lg shadow">
              <h3>Total Students</h3>
              <p className="text-3xl font-bold text-blue-600">150</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3>Total Courses</h3>
              <p className="text-3xl font-bold text-green-600">8</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3>Total Faculty</h3>
              <p className="text-3xl font-bold text-purple-600">12</p>
            </div>

          </div>

          <div className="bg-white p-6 mt-6 rounded-lg shadow">

            <h2 className="text-xl font-bold mb-4">
              Student Details
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-3">ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Department</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="p-3">1</td>
                    <td className="p-3">Arun</td>
                    <td className="p-3">CSE</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-3">2</td>
                    <td className="p-3">Priya</td>
                    <td className="p-3">IT</td>
                  </tr>

                  <tr>
                    <td className="p-3">3</td>
                    <td className="p-3">Kavin</td>
                    <td className="p-3">ECE</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}

export default App;