import React, { useState } from 'react'


const AdminHeader = ({setmenu}) => {
    const [sidemenu,setsidemenu]=useState(false);
  return (<>
  {/*Navbar & side menu */}
<div>
  {/* side menu */}
{sidemenu &&  <div className="z-50 w-[200px] inline-block h-full shadow-md bg-red-500 px-1  absolute float-left">
    <h1 className='bg-white  ml-[20px] pl-2 w-[90px] font-bold rounded-md text-[25px] mt-[20px]'>Inv.X</h1>
  <ul className="relative text-white mt-5">
    <li className="relative btn btn-ghost w-[190px]">      
        <a className="flex items-center text-sm py-4 ml-[-56px] h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded   transition duration-300 ease-in-out " href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16"> <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" fill="white"></path> </svg> <span className=' text-white text-[12px] ml-[25px]'>Home</span></a>
    </li>
    <li className="relative btn btn-ghost w-[190px]">      
        <a className="flex items-center text-sm py-4  h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded   transition duration-300 ease-in-out " href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><svg style={{color: 'white'}}  xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-list-ul" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="white"></path> </svg> <span className=' text-white ml-[25px] text-[12px]'>Inventory List</span></a>
    </li>
    <li className="relative btn btn-ghost w-[190px]">      
        <a className="flex items-center ml-[-66px] text-sm py-4  h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded   transition duration-300 ease-in-out " href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16"> <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" fill="white"></path> </svg> <span className=' text-white ml-[25px] text-[12px]'>Chat</span></a>
    </li>
    <li className="relative btn btn-ghost ml-[5px] w-[190px]">      
        <a className="flex items-center   text-sm py-4  h-12 overflow-hidden text-white  text-ellipsis whitespace-nowrap rounded   transition duration-300 ease-in-out " href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16"> <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" fill="white"></path> </svg><span className=' text-white ml-[26px] text-[12px] '>Purchase Request</span></a>
    </li>
    <li className="relative btn btn-ghost ml-[5px] w-[190px]">      
        <a className="flex items-center ml-[-20px]  text-sm py-4  h-12 overflow-hidden text-white  text-ellipsis whitespace-nowrap rounded   transition duration-300 ease-in-out " href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg"  width="20" height="18" viewBox="0 0 640 512"><path d="M488 191.1h-152l.0001 51.86c.0001 37.66-27.08 72-64.55 75.77c-43.09 4.333-79.45-29.42-79.45-71.63V126.4l-24.51 14.73C123.2 167.8 96.04 215.7 96.04 267.5L16.04 313.8c-15.25 8.751-20.63 28.38-11.75 43.63l80 138.6c8.875 15.25 28.5 20.5 43.75 11.75l103.4-59.75h136.6c35.25 0 64-28.75 64-64c26.51 0 48-21.49 48-48V288h8c13.25 0 24-10.75 24-24l.0001-48C512 202.7 501.3 191.1 488 191.1zM635.7 154.5l-79.95-138.6c-8.875-15.25-28.5-20.5-43.75-11.75l-103.4 59.75h-62.57c-37.85 0-74.93 10.61-107.1 30.63C229.7 100.4 224 110.6 224 121.6l-.0004 126.4c0 22.13 17.88 40 40 40c22.13 0 40-17.88 40-40V159.1h184c30.93 0 56 25.07 56 56v28.5l80-46.25C639.3 189.4 644.5 169.8 635.7 154.5z" fill="white"></path></svg><span className='ml-[25px]'>Sales Request</span></a>
    </li>
    <li className="relative btn btn-ghost ml-[5px] w-[190px]">      
        <a className="flex items-center ml-[-70px]  text-sm py-4  h-12 overflow-hidden text-white  text-ellipsis whitespace-nowrap rounded   transition duration-300 ease-in-out " href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16"> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="white"></path> </svg><span className='ml-[28px]'>Member</span></a>
    </li>
    <li className="relative btn btn-ghost ml-[5px] w-[190px]">      
        <a className="flex  items-center ml-[-76px]  text-sm py-4  h-12 overflow-hidden text-white  text-ellipsis whitespace-nowrap rounded   transition duration-300 ease-in-out " href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-report-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" /> <path d="M18 12v-5a2 2 0 0 0 -2 -2h-2" /> <rect x="8" y="3" width="6" height="4" rx="2" /> <path d="M8 11h4" /> <path d="M8 15h3" /> <circle cx="16.5" cy="17.5" r="2.5" /> <path d="M18.5 19.5l2.5 2.5" /> </svg><span className='text-white ml-[28px]'>Report</span></a>
    </li>
  </ul>
</div>}

{/* close side menu */}

{/* start navbar */}
<div className="navbar text-white bg-red-500">
  <div className={` navbar-start w-[150px] block ${sidemenu ?'ml-[220px] ' :''} `}>
    <div className="btn btn-ghost w-[100px]" onClick={()=>{
        setsidemenu(!sidemenu)
        setmenu(!sidemenu);
    }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        <p className='text-[12px] ml-1'>Menu</p>
    </div>
  </div>

  <div className='navbar-start w-[360px]'>
      <input type="text" placeholder="Search here" className="w-[360px] input input-bordered input-sm max-w-xs" />
  </div>
  <div className="navbar-center hidden lg:flex text-[15px] ml-[40px] space-x-7">
    <ul className="menu menu-horizontal p-0  space-x-4">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>
      <li><a>Item 4</a></li>
      <li><a>Item 5</a></li>
      <li><a>Item 6</a></li>

    </ul>
  </div>  <div className='navbar-start ml-[100px]  w-[50px] p-4 btn btn-ghost btn-circle'>
    <a><svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16"> <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" fill="white"></path> </svg></a>
  {/* profile */}
  </div>
  {/* close side bar */}
  <div className="navbar-start  ml-[100px] float-left dropdown dropdown-end flex flex-row text-red-500">
      <div className='text-white text-[12px]'>
          <p className='text-[13px]'>Ahmad Khan</p>
          <p  className='text-[12px]'>Administrator</p>
      </div>
      <div className='ml-2'>
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
      </div>
  </div>
  </div>
</div>
{/* close Navbar & side menu */}



  </>)
}

export default AdminHeader