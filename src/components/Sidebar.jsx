import React from "react";

function Sidebar() {
  return (
    <div className="bg-gray-200 w-full md:w-60 p-5">
      <h2 className="font-bold mb-4">Menu</h2>
      <p className="p-2">Dashboard</p>
      <p className="p-2">Students</p>
      <p className="p-2">Courses</p>
      <p className="p-2">Faculty</p>
      <p className="p-2">Settings</p>
    </div>
  );
}

export default Sidebar;