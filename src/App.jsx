
import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import LostFound from './components/LostFound'

const App = () => {
  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6 bg-gray-100 min-h-screen">

          <h1 className="text-2xl font-bold mb-2">
            Dashboard
          </h1>

          <p className="text-gray-600 mb-6">
            Welcome to Lost and Found Management Portal
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="bg-white p-5 rounded-lg shadow">
              <h2 className="text-gray-500">Total Items</h2>
              <h1 className="text-3xl font-bold text-blue-500">150</h1>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <h2 className="text-gray-500">Lost Items</h2>
              <h1 className="text-3xl font-bold text-red-500">60</h1>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <h2 className="text-gray-500">Found Items</h2>
              <h1 className="text-3xl font-bold text-green-500">90</h1>
            </div>

          </div>

          <div className="bg-white p-6 mt-6 rounded-lg shadow">
            <LostFound />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
