
import  { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  itemType: z.enum(['Lost', 'Found']),
  itemName: z.string().min(3, 'Item name must be at least 3 characters'),
  location: z.string().min(3, 'Location is required'),
  date: z.string().min(1, 'Date is required'),
  contact: z.string().regex(/^[0-9]{10}$/, 'Enter valid 10 digit number'),
  description: z.string().min(5, 'Description is required')
})

const ReportItem = () => {

  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      itemType: 'Lost'
    }
  })

  function onSubmit(data) {
    console.log(data)
    setSuccess(true)
    reset()
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-2xl">

      <h1 className="text-2xl font-bold mb-5">
        Report Lost / Found Item
      </h1>

      {success && (
        <p className="bg-green-100 text-green-700 p-3 rounded mb-4">
          Item reported successfully!
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>

        <label className="font-semibold">Item Type</label>

        <select
          {...register('itemType')}
          className="w-full border p-2 rounded mt-2 mb-2"
        >
          <option value="Lost">Lost Item</option>
          <option value="Found">Found Item</option>
        </select>

        <label className="font-semibold">Item Name</label>

        <input
          {...register('itemName')}
          placeholder="Enter item name"
          className="w-full border p-2 rounded mt-2"
        />
        <p className="text-red-500 text-sm mb-3">
          {errors.itemName?.message}
        </p>

        <label className="font-semibold">Location</label>

        <input
          {...register('location')}
          placeholder="Enter location"
          className="w-full border p-2 rounded mt-2"
        />
        <p className="text-red-500 text-sm mb-3">
          {errors.location?.message}
        </p>

        <label className="font-semibold">Date</label>

        <input
          type="date"
          {...register('date')}
          className="w-full border p-2 rounded mt-2"
        />
        <p className="text-red-500 text-sm mb-3">
          {errors.date?.message}
        </p>

        <label className="font-semibold">Contact Number</label>

        <input
          {...register('contact')}
          placeholder="Enter 10 digit mobile number"
          className="w-full border p-2 rounded mt-2"
        />
        <p className="text-red-500 text-sm mb-3">
          {errors.contact?.message}
        </p>

        <label className="font-semibold">Description</label>

        <textarea
          {...register('description')}
          placeholder="Describe your item"
          className="w-full border p-2 rounded mt-2"
        />
        <p className="text-red-500 text-sm mb-3">
          {errors.description?.message}
        </p>

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Submit Report
        </button>

      </form>
    </div>
  )
}

export default ReportItem
