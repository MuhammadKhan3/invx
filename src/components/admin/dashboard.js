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
          <div className='h-[400px] w-[800px]  rounded-lg bg-white relative top-5 left-10   text-cyan-500 '>
           <h1 className='ml-[30px] relative top-5 font-bold'>
              Inventory Sales Trend
           </h1>
              <Inventory/> 
          </div>

    {/*  close Inventory Trend */}
        <div className='flex flex-col space-y-3'>
         {/* sale btn  */}
         <div className='flex flex-col  relative left-[-190px] top-[50px] border-none  btn m-0 bg-[#dcfce7] h-[80px] w-[190px] text-[#0f766e]'>

              <div className='ml-[-50px] text-left text-[12px] '>
                Total Sales Trend
              </div>
              <div className='text-[29px] mt-[10px] ml-[-70px]'>
                24804
              </div>
         </div>
         {/* close sale btn */}
         {/* Total items */}
         <div className='flex flex-col  relative left-[-190px] top-[50px] border-none  btn m-0 bg-[#dcfce7] h-[80px] w-[190px] text-[#0f766e]'>
            
              <div className='ml-[-30px] text-left text-[12px] '>
                Total Sales Trend
              </div>
              <div className='text-[29px] mt-[10px] ml-[-70px]'>
                81
              </div>
                    
           </div>
         {/* close total items */}
         {/* Total Carried */}
         <div className='flex flex-col  relative left-[-190px] top-[50px] border-none  btn m-0 bg-[#dcfce7] h-[80px] w-[190px] text-[#0f766e]'>
            <div >
              <div className='relative ml-[-30px] text-left text-[12px] '>
                Total Sales Trend
              </div>
              <div className='relative text-left text-[29px] mt-[10px] ml-[-30px]'>
                24343434
              </div>
            </div>
         </div>
         {/* Close Total Carried */}
        </div>
  </div>
</div>
{/*close  Dashboard */}
</>
  )
}

export default Dashboard