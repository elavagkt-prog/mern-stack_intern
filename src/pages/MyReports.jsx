
//import React from 'react'

const MyReports = () => {
  return (
    <div className="bg-white p-6 rounded shadow">

      <h1 className="text-2xl font-bold mb-5">
        My Reports
      </h1>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="p-3">Item</th>
            <th className="p-3">Type</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="p-3">Mobile</td>
            <td className="p-3">Lost</td>
            <td className="p-3 text-red-500">Pending</td>
          </tr>

          <tr>
            <td className="p-3">Wallet</td>
            <td className="p-3">Found</td>
            <td className="p-3 text-green-600">Resolved</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default MyReports
