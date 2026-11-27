
//import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import Dashboard from './pages/Dashboard'
import ReportItem from './pages/ReportItem'
import LostItems from './pages/LostItems'
import FoundItems from './pages/FoundItems'
import MyReports from './pages/MyReports'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/report" element={<ReportItem />} />
            <Route path="/lost" element={<LostItems />} />
            <Route path="/found" element={<FoundItems />} />
            <Route path="/reports" element={<MyReports />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App
