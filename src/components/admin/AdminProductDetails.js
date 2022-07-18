import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AdminHeader from './header';
import ProductComponent from './productcomponent';
import Queries from './queries';

const AdminProductDetails = () => {
    const [sidemenu,setsidemenu]=useState(false);
    const [innernavbar,setnavbar]=useState('detail');
    const [query,setquery]=useState(false);
    return (<>
   <AdminHeader setmenu={setsidemenu} page={'productdetail'}/>
   {query &&
   <Queries/>
   }
   <div className={`block relative  bg-gray-50 w-auto h-[900px]  `}>
        {/* div inner container */}
        <div className={`w-[1320px] h-[540px] relative flex  flex-row flex-wrap ${sidemenu ? 'left-[200px]':''}`}>
            <div className='w-[1320px] h-[540px] mt-[10px]'>
                <h1 className='text-gray-700 font-bold text-[22px] ml-[45px] mt-[5px] inline'>Product detail </h1>
                {/* Start Select Menu */}
                <button className='select-primary bg-blue-400 text-white focus:outline-none p-2 select-bordered relative left-[1030px]'  onClick={()=>{setquery(true)}}>View More</button>
                {/*drop down  */}
                {/* <select className="" >
                    <option>View More</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select> */}
                {/* Close Select Menu */}
                <div className='bg-pink-50 ml-[45px] mt-[10px] w-[1320px] h-[110px]'>
                    {/* Avatar */}
                    <div className="avatar relative top-[10px] ml-[10px] inline float-left">
                        <div className="w-[90px] ">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    {/* Close Avatar */}
                    {/* Start Product edit menu */}
                    <div className='inline float-left  ml-[10px] font-medium text-[20px]  '>
                        <h1>Digital Wrist Watch</h1>

                        <div className='text-[14px] font-normal mt-[10px] '>
                            <div className='text-blue-600 float-left inline-block hover:text-blue-800 cursor-pointer active:scale-[1.1]'>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{float:'left',display:'inline',marginTop:'6px'}} width="12" height="12" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16"> <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/> </svg>
                                <button className='text-[16px] inline ml-[2px] '>Edit</button>
                            </div>
                            <div className='text-[14px] ml-[30px] font-normal float-left inline-block text-blue-600 hover:text-blue-800 cursor-pointer active:scale-[1.1]'>
                              <svg style={{float:'left',display:'inline',marginTop:'4px'}} viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg" width='14' height='14' ><path fill="currentColor" d="M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"/></svg> 
                              <button className='inline float-left ml-[5px]'>Delete</button>
                            </div>
                            <div className='text-[14px] ml-[30px] font-normal float-left inline-block text-blue-600 hover:text-blue-800 cursor-pointer active:scale-[1.1]'>
                            <svg style={{float:'left',display:'inline',marginTop:'4px',color: 'rgb(37, 99, 235)'}} width='14' height='14' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="100%" height="100%" fill="#0000"></rect><path d="M0 224C0 188.7 28.65 160 64 160H128V288C128 341 170.1 384 224 384H352V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V224zM224 352C188.7 352 160 323.3 160 288V64C160 28.65 188.7 0 224 0H448C483.3 0 512 28.65 512 64V288C512 323.3 483.3 352 448 352H224z" fill="#2563eb"></path></svg>
                              <button className='ml-[5px]'>Clone</button>
                            </div>
                            <div className='text-[14px] ml-[30px] font-normal float-left inline-block text-blue-600 hover:text-blue-800 cursor-pointer active:scale-[1.1]'>
                              <svg style={{float:'left',display:'inline',marginTop:'4px', color: 'rgb(37, 99, 235)'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="#2563eb"></path> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="#2563eb"></path> </svg>
                              <button className='ml-[5px]'>Cancel Stock</button>
                            </div>
                        </div>
                    </div>
                    {/* close Product edit menu */}
                    <div className='block w-[340px] relative top-[2px] left-[960px]'>
                        <button className='bg-blue-300 p-2 text-white hover:bg-blue-600 active:bg-blue-800'>Stock History</button>
                        <button className='bg-blue-300 p-2 text-white ml-[10px] hover:bg-blue-600 active:bg-blue-800'>Add Stock</button>
                    </div>
                </div>
                {/* Product Detail Navbar list */}
                <div className='50 ml-[45px] w-[1320px] bg-stone-100 text-gray-400 h-[30px] space-x-4'>
                    <div>
                        <div onClick={()=>{setnavbar('detail')}} className={`inline float-left ml-[10px] hover:border-b-4 border-b-gray-700 ${innernavbar==='detail' ? 'border-b-4 border-b-gray-700':''}`}>
                          <svg style={{ color:' rgb(156, 163, 175)',display:'inline'}}  xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-list-ul" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#9ca3af"></path> </svg>
                          <button className='ml-[6px]' >Details</button>
                        </div>
                        <div  onClick={()=>{setnavbar('location')}} className={`inline float-left ml-[30px] hover:border-b-4 border-b-gray-700 ${innernavbar==='location' ? 'border-b-4 border-b-gray-700':''}`}>
                          <svg style={{ color: 'rgb(156, 163, 175)',display:'inline',float:'left',marginTop:'4px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar2-minus-fill" viewBox="0 0 16 16"><rect width="100%" height="100%" fill="#0000"></rect> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM6 10a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" fill="#9ca3af"></path> </svg>
                          <button className='ml-[6px] inline float-left'>Stock Location</button>
                        </div>
                        <div onClick={()=>{setnavbar('movement')}} className={`inline float-left ml-[30px] hover:border-b-4 border-b-gray-700 ${innernavbar==='movement' ? 'border-b-4 border-b-gray-700':''}`}>
                           <svg style={{ color: 'rgb(156, 163, 175)',display:'inline',float:'left',marginTop:'4px'}} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v3.764a2 2 0 0 0 1.106 1.789L16 14" fill="#9ca3af"></path></svg>
                           <button className=' ml-[6px] inline float-left'>Stock Movement</button>
                        </div>
                        <div onClick={()=>{setnavbar('feedback')}} className={`inline float-left ml-[30px] hover:border-b-4 border-b-gray-700 ${innernavbar==='feedback' ? 'border-b-4 border-b-gray-700':''}`}>
                          <svg style={{color: 'rgb(156, 163, 175)',display:'inline',float:'left',marginTop:'4px'}} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M13.57,11.57L12,15l-1.57-3.43L7,10l3.43-1.57 L12,5l1.57,3.43L17,10L13.57,11.57z" fill="#9ca3af"></path></svg>
                          <button className=' ml-[6px] inline float-left '>Product Feedback</button>
                        </div>
                    </div>
                </div>
                {/* Close Product Detail Navbar list */}
                
                <ProductComponent select={innernavbar} />
            
            </div>
        </div>
    </div>
  </>)
}

export default AdminProductDetails