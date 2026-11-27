
import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'

const LostFound = () => {

  const [item, setItem] = useState('')
  const [status, setStatus] = useState('No item reported')

  function reportItem() {
    if (item.trim() !== '') {
      setStatus(item + ' reported successfully')
    }
  }

  useEffect(() => {
    console.log('Item status updated:', status)
  }, [status])

  return (
    <>
      <h2 className="text-xl font-bold mb-4">
        Report Lost or Found Item
      </h2>

      <input
        type="text"
        placeholder="Enter item name"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      <p className="text-gray-600 mb-4">
        Status: {status}
      </p>

      <Button onClick={reportItem}>
        Submit Report
      </Button>
    </>
  )
}

export default LostFound
