
//import React from 'react'

const FoundItems = () => {
  return (
    <div className="bg-white p-6 rounded shadow">

      <h1 className="text-2xl font-bold mb-5">
        Found Items
      </h1>

      <div className="border p-4 rounded mb-3">
        <h2 className="font-bold">Wallet</h2>
        <p>Location: Chennai</p>
        <p className="text-green-600">Status: Found</p>
      </div>

      <div className="border p-4 rounded">
        <h2 className="font-bold">Watch</h2>
        <p>Location: Erode</p>
        <p className="text-green-600">Status: Found</p>
      </div>

    </div>
  )
}

export default FoundItems
