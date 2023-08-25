import React from 'react'
import { useAuth } from "./hooks/useAuth";
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
const Oneon = () => {
    useAuth()
    const navigate = useNavigate();

  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="w-96 bg-white p-8 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Create 1on1 Meeting</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="meetingName" className="block font-medium mb-1">Meeting Name</label>
          <input
            type="text"
            id="meetingName"
            name="meetingName"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter meeting name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="inviteUser" className="block font-medium mb-1">Invite Users</label>
          <select
            multiple
            id="inviteUser"
            name="inviteUser"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          >
            {/* Add options for users here */}
            <option value="user1">User 1</option>
            <option value="user2">User 2</option>
            <option value="user3">User 3</option>

            {/* Add more user options */}
          </select>
        </div>
        <div className="flex justify-between">
          <button
            onClick={()=>navigate('/dashboard')}
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Create
          </button>
        </div>

      </form>
    </div>
  </div>
  </>
  )
}

export default Oneon
