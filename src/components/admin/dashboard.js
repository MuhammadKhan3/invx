import React, { useState } from 'react'
import Inventory from './graph';
import AdminHeader from './header';

const Dashboard = () => {
    const [sidemenu,setsidemenu]=useState(false);
  return (<>
  <AdminHeader setmenu={setsidemenu}/>
  {/* Dashboard */}
  <div className={`block relative  bg-gray-100 w-[1599px] h-[689px]  $`}>
    <div className={`w-[1400px]  h-[689px] relative flex flex-row ${sidemenu ? 'left-[200px]':''}`}>
    
    {/* Inventory Trend */}
          <div className='h-[355px] w-[800px]  rounded-lg bg-white relative top-5 left-10   text-cyan-500 '>
           
            <h1 className='ml-[30px] relative top-5 font-bold'>
              Inventory Sales Trend
            </h1>
              <Inventory/> 
           

    {/*  close Inventory Trend */}
         {/* start trend pages button */}
        <div className='absolute top-0 left-[550px] mt-5  flex-col space-y-3 '>
         {/* sale btn  */}
         <div className='flex flex-col text-justify   border-none rounded-lg   m-0 bg-[#f3f4f6] h-[100px] w-[190px] text-[#0f766e] hover:scale-[1.1]'>
              <div className='ml-[20px] mt-3'> 
                <p className='text-[12px]'>Total Sales Trend </p>
                <p className='text-[29px] font-normal   mt-[2px]'>24804</p>
              </div>
         </div>
         {/* close sale btn */}

         {/* Total items */}
         <div className='flex flex-col   border-none  m-0 bg-[#f3f4f6]   w-[190px] text-[#0f766e] h-[100px] rounded-lg hover:scale-[1.1]'>
              <div className='ml-[20px] mt-3'>
                <p className='text-[12px]'>Total items in Inventory </p> 
                <p className='text-[29px] font-normal   mt-[2px]'>81</p>
              </div>      
           </div>
         {/* close total items */}
         {/* Total Carried */}
         <div className='flex flex-col   border-none   m-0 bg-[#f3f4f6]  w-[190px] text-[#0f766e] h-[100px] rounded-lg hover:scale-[1.1]'>
              <div className='ml-[20px] mt-3 '>
                <p className='text-[14px]'>Total Carried Inventory</p>
                <p className='text-[29px] font-normal   mt-[2px]'>2433</p>
              </div>
         </div>
         {/* Close Total Carried */}
        </div>
      </div>
      {/* close Trend badges component */}

          <div className='flex flex-col   space-y-2  relative mt-10 ml-[50px]'>
            <button className='bg-gray-300  p-1 pl-6 pr-6  rounded-lg hover:bg-red-600 hover:text-white active:scale-[1.1]'>
              Yearly
            </button>
            <button className='bg-gray-300  p-1 pl-6 pr-6  rounded-lg hover:bg-red-600 hover:text-white active:scale-[1.1]'>
              Monthly
            </button>
            
            <button className='bg-gray-300  p-1 pl-6 pr-6  rounded-lg hover:bg-red-600 hover:text-white active:scale-[1.1]'>
              Daily
            </button>
          </div>
          {/* Start Fast Moving Component */}
            <div className=' bg-base-100 w-[400px] ml-[30px] rounded-lg h-[355px] mt-5 p-5'>
             <h1 className='text-cyan-500 font-medium '>Fast Moving Stock</h1>
             
            <div className='flex flex-col space-y-5 mt-8'>
 
              {/* Fast moving list 1 */}
                <div>
                      <div class="avatar cursor-pointer active:scale-[1.01] float-left inline-block">
                          <div class="w-11 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                          </div>
                      </div>
                      <div className='float-left inline-block ml-3'>
                        <h1 className='text-[14px] text-cyan-500 font-medium' >Package 01</h1>
                        <p  className='text-[10px] text-cyan-500 font-medium'>an anchor to be accessed</p>
                      </div>
                      <div className='ml-[120px] inline-block'>
                        <h1 className='text-cyan-500 text-[14px] font-medium'>$233,50</h1>
                      </div>
                </div>
              {/* Close Fast moving 1 */}
              {/* Fast moving list  2 */}
                  <div>
                      <div class="avatar cursor-pointer active:scale-[1.01] float-left inline-block">
                          <div class="w-11 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                          </div>
                      </div>
                      <div className='float-left inline-block ml-3'>
                        <h1 className='text-[14px] text-cyan-500 font-medium' >Package 01</h1>
                        <p  className='text-[10px] text-cyan-500 font-medium'>an anchor to be accessed</p>
                      </div>
                      <div className='ml-[120px] inline-block'>
                        <h1 className='text-cyan-500 text-[14px] font-medium'>$233,50</h1>
                      </div>
                  </div>
              {/* Close Fast moving 2 */}
              {/* Fast moving list 3 */}
                  <div>
                      <div class="avatar cursor-pointer active:scale-[1.01] float-left inline-block">
                          <div class="w-11 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                          </div>
                      </div>
                      <div className='float-left inline-block ml-3'>
                        <h1 className='text-[14px] text-cyan-500 font-medium' >Package 01</h1>
                        <p  className='text-[10px] text-cyan-500 font-medium'>an anchor to be accessed</p>
                      </div>
                      <div className='ml-[120px] inline-block'>
                        <h1 className='text-cyan-500 text-[14px] font-medium'>$233,50</h1>
                      </div>
                  </div>
              {/* Close Fast moving 4 */}
                            {/* Fast moving list 3 */}
                            <div>
                      <div class="avatar cursor-pointer active:scale-[1.01] float-left inline-block">
                          <div class="w-11 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                          </div>
                      </div>
                      <div className='float-left inline-block ml-3'>
                        <h1 className='text-[14px] text-cyan-500 font-medium' >Package 01</h1>
                        <p  className='text-[10px] text-cyan-500 font-medium'>an anchor to be accessed</p>
                      </div>
                      <div className='ml-[120px] inline-block'>
                        <h1 className='text-cyan-500 text-[14px] font-medium'>$233,50</h1>
                      </div>
                  </div>
              {/* Close Fast moving 4 */}
            </div>
              
          </div>
          {/* close fast moving */}
          
     </div>
 </div>
{/*close  Dashboard */}
</>
  )
}

export default Dashboard