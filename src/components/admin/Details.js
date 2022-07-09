import React, { useState } from 'react'
import AdminHeader from './header'

const Details = () => {
    const [sidemenu,setsidemenu]=useState(false);
    const [modal,setmodal]=useState(false)
  return (<>
   <AdminHeader setmenu={setsidemenu}/>
  {/* Dashboard */}
     <div className={`block relative  bg-gray-100 w-[1599px] h-[689px]  `}>
        {/* div inner container */}
        <div className={`w-[1320px] h-[540px] relative flex flex-row flex-wrap ${sidemenu ? 'left-[200px]':''}`}>
            {/* Purchase detail Modal */}
            <div class={`modal modal-open ${modal ?'modal-open ':''} `}>
                <div class="modal-box !rounded-none">
                    <h3 class="font-bold uppercase text-[24px] text-red-700 border-b-[1px] w-[180px] border-gray-400">Details</h3>
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
</>)
}
export default Details