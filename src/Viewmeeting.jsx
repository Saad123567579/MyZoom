import React from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { useAuth } from './hooks/useAuth';
import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';
const Viewmeeting = () => {
  useAuth();
  const navigate = useNavigate();
  const invitedmeetings = useSelector((state)=>state?.auth?.invitedmeetings);
  const handleCopyLink = (event) => {
    let status = event.target.getAttribute('data-date');
    const dbDate = new Date(status);
    const currentDate = new Date();
    console.log("The date status is ",dbDate < currentDate)
    if(dbDate < currentDate){
      let id = event.target.id;
      const link = `localhost:3000/join/${id}`;
      const tempInput = document.createElement('input');
      document.body.appendChild(tempInput);
      tempInput.value = link;
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      console.log(link);
      toast.success("Link copied to clipboard");
    }
    else {
      toast.info("This meeting has ended")
    }
  
  }
  const handleJoin = (event) => {
    let status = event.target.getAttribute('data-date');
    const dbDate = new Date(status);
    const currentDate = new Date();
    console.log("The date status is ",dbDate < currentDate)
    if(dbDate < currentDate){
      let id = event.target.id;
      navigate(`/join/${id}`);
    }
    else {
      toast.info("This meeting has ended");
    }

  }
  function isDbDatePassed(dbDateStr) {
    const dbDate = new Date(dbDateStr);
    const currentDate = new Date();
    console.log("The date status is ",dbDate < currentDate)
    return dbDate < currentDate;
  }
  return (
    <>
      {invitedmeetings === null && <div className='h-full w-full font-bold flex justify-center items-center text-4xl'>Loading...</div>}
      {invitedmeetings?.length === 0 && <><Navbar /><div className='h-full w-full font-bold flex justify-center items-center text-4xl'>No Meetings Found</div></>}

      {invitedmeetings && invitedmeetings.length > 0 && (
        <>
          <Navbar />
          <div className="flex flex-col mt-4">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Copy Link
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {invitedmeetings.map((data) => (
                        <tr key={data.uid}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 font-bold">{data.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap ">
                            <div className="text-sm text-gray-900 font-bold">{data.type === "one" ? "1 On 1" : "Conference"}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 font-bold">{data.date}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div id={data.uid} data-date={data.date} onClick={handleJoin} className="text-sm text-gray-900 rounded-xl w-14 flex justify-center items-center bg-zoom-green font-bold cursor-pointer">{isDbDatePassed(data.date)?("Join"):("Ended")}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div id={data.uid} data-date={data.date} onClick={handleCopyLink} className="text-sm text-gray-900 rounded-xl w-14 flex justify-center items-center bg-zoom-green font-bold cursor-pointer">Link</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
  
};

export default Viewmeeting;

