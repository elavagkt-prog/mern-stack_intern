
//import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="bg-white w-56 min-h-screen p-5 shadow">

      <h2 className="font-bold mb-5">Menu</h2>

      <ul className="space-y-4">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/report">Report Item</Link></li>
        <li><Link to="/lost">Lost Items</Link></li>
        <li><Link to="/found">Found Items</Link></li>
        <li><Link to="/reports">My Reports</Link></li>
      </ul>

    </div>
  )
}

export default Sidebar
