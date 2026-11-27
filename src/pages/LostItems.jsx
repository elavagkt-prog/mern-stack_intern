
//import React from 'react'

const LostItems = () => {
  return (
    <div className="bg-white p-6 rounded shadow">

      <h1 className="text-2xl font-bold mb-5">
        Lost Items
      </h1>

      <div className="border p-4 rounded mb-3">
        <h2 className="font-bold">Mobile Phone</h2>
        <p>Location: Chennai</p>
        <p className="text-red-500">Status: Lost</p>
      </div>

      <div className="border p-4 rounded">
        <h2 className="font-bold">College ID Card</h2>
        <p>Location: Coimbatore</p>
        <p className="text-red-500">Status: Lost</p>
      </div>

    </div>
  )
}

export default LostItems
