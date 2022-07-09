import React, { useState } from 'react'
import AdminHeader from './header'

const Import = () => {
const [sidemenu,setsidemenu]=useState(false);
  return (<>
    <AdminHeader setmenu={setsidemenu}/>
    <div className={`block relative  bg-gray-50 w-auto h-[690px]  `}>
        {/* div inner container */}
        <div className={`w-[1320px] h-[540px] relative flex  flex-row flex-wrap ${sidemenu ? 'left-[200px]':''}`}>
            <h1 className='text-red-600 text-[20px] ml-[30px] mt-[30px] font-bold'>Import Inventory From Excel</h1>
            {/* Stepper */}
            <ul className="space-x-[80px] mt-[20px] relative left-[350px]">
                <button className='bg-blue-400 text-white p-2 '>Upload</button>
                <hr className='border-red-500 relative top-[-24px]'/>
                <br/>
                {/* p-2 absolute top-4 left-[100px] w-[150px] mt-[-15px] */}
                <button className='bg-blue-200 text-white  relative left-[160px] top-[-64px] p-2'>Align Column</button>
                {/* absolute top-4 left-[400px] w-[150px] mt-[-15px] */}
                <hr className='border-red-500 w-[160px] relative top-[-85px] left-[270px]'/>
                <button className='bg-blue-200 text-white p-2 relative left-[430px] top-[-103px]'>Upload </button>
            </ul>
            {/* Close Stepper */}
            {/* Start the input div */}
            <div className=' absolute left-[30px] top-[60px] text-gray-400 '>
             <p>Select the primary descirption</p>
              <input id="fileSelect" hidden type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
              <label htmlFor='fileSelect'>
                <div className='bg-white w-[1250px] h-[300px] border border-gray-300'>
                    <button className='bg-blue-300 hover:bg-blue-600 p-2 pl-4 pr-4 text-white'>Upload</button>
                    <div className='ml-[550px] mt-[70px] '>
                    <svg xmlns="http://www.w3.org/2000/svg"  width="50" height="50" fill="currentColor" className="bi bi-upload ml-[80px]" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" id="mainIconPathAttribute" fill="#737373"></path> <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" id="mainIconPathAttribute" fill="#737373"></path> </svg>
                    <br/>
                    <p className='ml-[50px]'>No File Choosen</p>
                    <p>A maximum 100 files import record</p>
                    <p><a className='text-red-600'>Click here</a>to download the sample files</p>
                    </div>
                </div>  
              </label>
            </div>
            {/* close the input div */}
            {/* start the import div */}
            <div className='w-[1250px] border border-gray-300 h-[240px] bg-white absolute left-[30px] top-[420px]'>
              <button className='bg-blue-300 hover:bg-blue-600 p-2 pl-4 pr-4 text-white'>import</button>
            </div>
            {/* close the import div */}

        </div>

    </div>
    </>)
}

export default Import