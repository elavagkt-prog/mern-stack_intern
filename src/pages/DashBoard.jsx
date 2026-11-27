
//import React from 'react'

const Dashboard = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2">
        Dashboard
      </h1>

      <p className="text-gray-600 mb-6">
        Welcome to Lost and Found Management Portal
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-white p-6 rounded shadow">
          <h2>Total Items</h2>
          <h1 className="text-3xl font-bold text-blue-600">150</h1>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2>Lost Items</h2>
          <h1 className="text-3xl font-bold text-red-500">60</h1>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2>Found Items</h2>
          <h1 className="text-3xl font-bold text-green-600">90</h1>
        </div>

      </div>
    </>
  )
}

export default Dashboard
