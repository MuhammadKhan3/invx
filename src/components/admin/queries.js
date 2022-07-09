import React, { useState } from 'react'
import AdminHeader from '../admin/header';
import Header from '../admin/header'

const Queries = () => {
    const [sidemenu,setsidemenu]=useState(false);
    const [modal,setmodal]=useState(false)
  return (<>
    <AdminHeader setmenu={setsidemenu}/>
    <div className={`block relative  bg-gray-100 w-[1599px] h-[689px]  `}>
        {/* div inner container */}
        <div className={`w-[1320px] h-[540px] relative flex flex-row flex-wrap ${sidemenu ? 'left-[200px]':''}`}>
        <div class={`modal-open ${modal ?'modal-open ':''} `}>
                <div class="ml-[50px] mt-[50px] !rounded-none !w-[900px] p-2 bg-white">
                    <h3 class="font-bold uppercase ml-[20px] text-[24px] text-red-700 border-b-[1px] w-[180px] border-gray-400">Queries</h3>
                        <div class="avatar mt-[20px] ml-[20px] inline float-left">
                            <div class="w-20 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <h1 className='inline ml-[20px] mt-[40px] float-left text-blue-700 text-[20px]'>Amir Dogar</h1>
                        <br/>
                        <p className='block mt-[100px] ml-[20px] text-[20px] text-gray-400 '>Query</p>
                        <p className='ml-[20px] text-blue-600'>Does this product comply?</p>
                        <p className='block mt-[20px] ml-[20px] text-[20px] text-gray-400 '>Response</p>
                        <textarea class="textarea w-[860px] h-[150px] inline resize-none ml-[20px] outline outline-2 outline-gray-100 m-0 p-0 rounded-none mt-[10px]" ></textarea>
                        <div className='ml-[210px] inline absolute left-[570px] mt-[115px]'>
                            <button className='text-white bg-blue-500 p-2  hover:bg-blue-600 active:scale-[1.1]'>Submit Response</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default Queries