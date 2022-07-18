import React, { useState } from 'react'
import AdminHeader from './header'

const Details = () => {
    const [sidemenu,setsidemenu]=useState(false);
    const [modal,setmodal]=useState(false)
    const [clicklist,setlist]=useState(false);
  return (<>
   <AdminHeader setmenu={setsidemenu}/>
   <div className={`block relative  bg-gray-100 w-[1599px] h-[689px]  `}>
        {/* div inner container */}
        <div className={`w-[1320px] h-[540px] relative flex flex-row flex-wrap ${sidemenu ? 'left-[200px]':''}`}>
            <div className='w-[1320px] h-[540px]'>
                <h1 className='text-gray-700 font-bold text-[25px] ml-[45px] mt-[35px]'>Purchase Request</h1>
                {/* white box div */}
                <div className='ml-[40px]  bg-white w-[1320px] h-[540px] mt-[30px]'>
                {/* table */}
                <div className="overflow-x-auto">
                        {/* message box */}
                        <table className="table table-zebra w-full">
                            
                            <tbody>
                                <tr className='text-gray-400 font-medium'>
                                    <td>Name</td>
                                    <td>Messages</td>
                                    <td>Date</td>
                                    <td>Status</td>
                                </tr>
                                <tr className='text-blue-500 font-medium text-[14px] cursor-pointer' onClick={()=>{setlist(true)}}>
                                    <td>
                                        <div className="avatar active:scale-[1.06] inline  float-left ">
                                            <div className="w-10 rounded-full">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                        <span className='ml-[50px] inline mt-[30px] text-[16px] top-[10px] relative  hover:underline active:scale-[1.01]'>Cy Ganderton</span>
                                    </td>
                                    <td className='relative  hover:underline active:scale-[1.01]'>Quality Control Specialist</td>
                                    <td className='relative  hover:underline active:scale-[1.01]'>24-10-2022</td>
                                    <td><button className='bg-red-500 p-2 pl-6 pr-6 w-[120px] text-white hover:bg-red-600 active:scale-[1.06]'>Unread</button></td>
                                </tr>
                                <tr className='text-blue-500 font-medium text-[14px] cursor-pointer' onClick={()=>{setlist(true)}}>
                                    
                                    <td>
                                        <div className="avatar active:scale-[1.06] inline w-[30px] float-left ">
                                            <div className="w-9 rounded-full">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                        <span className='ml-[50px] inline mt-[30px] text-[16px] top-[10px] relative  hover:underline active:scale-[1.01]'>Cy Ganderton</span>
                                    </td>
                                    <td className='relative  hover:underline active:scale-[1.01]'>Quality Control Specialist</td>
                                    <td className='relative  hover:underline active:scale-[1.01]'>24-10-2022</td>
                                    <td><button className='bg-yellow-300 p-2 pl-6 pr-6 w-[120px] text-white hover:bg-yellow-500 active:scale-[1.06]'>Read</button></td>
                                </tr>
                                <tr className='text-blue-500 font-medium text-[14px] cursor-pointer' onClick={()=>{setlist(true)}}>
                                    <td>
                                        <div className="avatar active:scale-[1.06] inline w-[30px] float-left ">
                                            <div className="w-9 rounded-full">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                        <span className='ml-[50px] inline mt-[30px] text-[16px] top-[10px] relative  hover:underline active:scale-[1.01]'>Cy Ganderton</span>
                                    </td>
                                    <td className='relative  hover:underline active:scale-[1.01]'>Quality Control Specialist</td>
                                    <td className='relative  hover:underline active:scale-[1.01] active:scale-[1.01]'>24-10-2022</td>
                                    <td><button className=' p-2 pl-6 pr-6 bg-green-400 text-white hover:bg-green-600 active:scale-[1.06]'>Responded</button></td>
                                </tr>
                            </tbody>
                        </table>
                        {/* close message box */}
                    </div>
                    {/* close table div */}
                </div>
                {/* close white box div */}
            </div>
        </div>
        {/* close div inner container */}
    </div>
    {/* Dashboard */}
{clicklist && 
     <div className={`block relative  bg-gray-100 w-[1599px] h-[689px]  `}>
        {/* div inner container */}
        <div className={`w-[1320px] h-[540px] relative flex flex-row flex-wrap ${sidemenu ? 'left-[200px]':''}`}>
            {/* Purchase detail Modal */}
            <div className={`modal modal-open ${modal ?'modal-open ':''} `}>
                <div className="modal-box !rounded-none">
                    <h3 className="font-bold uppercase text-[24px] text-red-700 border-b-[1px] w-[180px] border-gray-400">Details</h3>
                    <div className='inline-grid  font-medium grid-cols-2 grid-rows-6 text-gray-500'>
                            <p className='mt-1 text-gray-400' >Order Date</p>
                            <p className='mt-1 ml-2'>24-Feb-2022</p>
                            <p className='mt-2 text-gray-400'>ORDERED BY </p>
                            <p className='mt-2 ml-2'>Noman Ali</p>
                            <p className='mt-2 text-gray-400'>ORDERED Status </p>
                            <p className='mt-2 ml-2'>Payment Confirmed</p>
                            <p className='mt-2 text-gray-400'>ORDERED ADD ONS </p>
                            <p className='mt-2 ml-2'>Inspection,Insurance</p>
                            <p className='mt-2 text-gray-400'>TOTAL ITEMS </p>
                            <p className='mt-2 ml-2'>3</p>
                            <p className='mt-2 text-gray-400'>ORDER VALUE</p>
                            <p className='mt-2 ml-2'>USD 21,211</p>
                    </div>
                    <div className='space-x-10 mt-16 ml-24'>
                        <button className='text-white bg-blue-500 p-2 hover:bg-blue-700'>Items And Bids</button>
                        <button className='text-white bg-red-500 p-2 pl-4 pr-4 hover:bg-red-700' onClick={()=>{setmodal(!modal)}}>Reject</button>
                        <button className='text-white bg-green-400 p-2 pl-4 pr-4 hover:bg-green-700'>Accept</button>
                    </div>
                </div>
            </div>
            {/* Close Purchase detail Modal */}
        </div>
        {/* close div inner container */}
    </div>  
    }
</>)
}
export default Details