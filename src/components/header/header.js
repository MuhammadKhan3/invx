import React from 'react'

const Header = () => {
  return (
    <section>
        {/* top header */}
 <div className="navbar bg-base-100">
    {/*  */}
    <div className='text-red-600 grid grid-cols-3 border-yellow-300 divide-x ml-[300px] '>
        <div><a className='btn btn-ghost text-[12px]'>Language</a></div>
        <div><a className='btn btn-ghost text-[12px]'>USD</a></div>
    </div>
    {/* search filed */}
    <div className='navbar-center ml-[300px]'>
      <input type="text" placeholder="Type here" className="w-[290px] input input-bordered input-sm max-w-xs" />
    </div>
    {/* close search field */}
    {/* search icon */}
    <div className='grid grid-cols-3 divide-x space-x-4'>
        <div>
            <button className="btn btn-ghost  w-[90px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
        </div>
        {/* whislist */}
        <div className='rating hover:bg-slate-100 hover:rounded-lg'>
          <input type="radio" name="rating-3" className="ml-[13px] h-[50px] mask mask-heart bg-slate-200  hover:bg-red-600" />
          <a className='text-[14px] mt-[15px] ml-2'>Whislist</a>
        </div>
        {/* close whistlist */}
        {/*Cart  */}
        <div className="flex-none">
            <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost ">
                <div className="indicator ml-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg><a className='mt-1'>Cart</a>
                {/* <span className="badge badge-sm indicator-item">0</span> */}
                </div>
            </label>
            <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                </div>
                </div>
            </div>
          </div>
        </div>
        {/* close cart */}
    </div>
    {/* close search icon */}
 </div>
        {/* bottom header */}

 <div className="navbar bg-red-600 text-white">
  <div className="navbar-center ml-[300px]">
    <a className="btn btn-ghost text-black normal-case text-xl bg-white">Inv-X</a>
  </div>
  
  {/* Navbar menu list */}
  <div className="navbar-center hidden lg:flex text-[15px] ml-[40px] space-x-7">
    <ul className="menu menu-horizontal p-0  space-x-4">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>
      <li><a>Item 4</a></li>
      <li><a>Item 5</a></li>
      <li><a>Item 6</a></li>

      <li tabIndex="0" className='ml-[60px]'>
        <a>
            More
          <svg className="fill-current text-black rounded-lg bg-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-slate-50 text-black">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
    </ul>
  </div>
  {/* close Navbar Menu list */}

  <div className="navbar-center ml-[30px]"> 
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
  {/* avatar */}
  <div className="dropdown dropdown-end text-red-500 ml-[200px]">
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
  {/* close avatar */}
</div>

    </section>
  )
}

export default Header