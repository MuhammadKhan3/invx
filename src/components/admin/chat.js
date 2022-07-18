import React, { useState } from 'react'
import AdminHeader from './header'

const Chat = () => {
    const [sidemenu,setsidemenu]=useState(false);

  return (<>
   <AdminHeader setmenu={setsidemenu}/>
  {/* Dashboard */}
     <div className={`block relative  bg-gray-100 w-[1599px] h-[689px]  `}>
        {/* div inner container */}
        <div className={`w-[1320px] h-[540px] relative flex flex-row flex-wrap ${sidemenu ? 'left-[200px]':''}`}>
            <div className='w-[1320px] h-[540px]'>
                <h1 className='text-gray-700 font-bold text-[25px] ml-[45px] mt-[35px]'>Ongoing Chat</h1>
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
                                <tr className='text-blue-500 font-medium text-[14px] cursor-pointer'>
                                    
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
                                <tr className='text-blue-500 font-medium text-[14px] cursor-pointer'>
                                    
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
                                <tr className='text-blue-500 font-medium text-[14px] cursor-pointer'>
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
    </>)
}
export default Chat