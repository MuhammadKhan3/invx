import React, { useState } from 'react'
import Card from '../card/card';
import Header from '../header/header'

const Cart = () => {
  const [sidemenu,setsidemenu]=useState(false);
  const [innernavbar,setnavbar]=useState('detail');
  return (<>
  <section className='h-[110rem]'>
  <Header/>
  <div className='grid grid-cols-1 w-[800px]  relative left-[400px] top-[60px] '>
    <div className=' mt-[40px]'>
       <h1 className='text-red-600  font-bold text-[25px] inline-block float-left'>Your Cart</h1>
       {/* Bread Crumbs */}
       <div className="w-auto text-sm breadcrumbs text-red-500 text-[13px] inline-block ml-[410px]">
        <ul>
            <li><a>Long text 1</a></li>
            <li><a>Long text 2</a></li>
            <li><a>Long text 3</a></li>
        </ul>
       </div>
       <hr className='border  mt-[50px]'/>
       {/* close bread crumbs */}
       {/* Table  */}
       <div className="overflow-x-auto w-full mt-[30px]">
          <table className="table w-full border-collapse border    border-slate-200">
            <thead>
              <tr>
                {/* <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th> */}
                <th className='border border-slate-200'></th>
                <th className='border border-slate-200'>Product Name</th>
                <th className='border border-slate-200'>Prcie</th>
                <th className='border border-slate-200'>Qty</th>
                <th className='border border-slate-200'>Total</th>
                <th className='border border-slate-200'></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='border border-slate-200'>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td className='border border-slate-200'>
                  <div className="flex items-center space-x-3">
                    <div className="avatar rounded-none">
                      <div className="mask  w-18 h-16">
                      <img src="https://placeimg.com/80/80/people" />
                      </div>
                    </div>
                    <div className='text-gray-600'>
                      <div className="font-bold text-[12px]">Sample:Product Image</div>
                      <div className="font-bold text-[12px]">Color : Red</div>
                      <div className="font-bold text-[12px]">Size:L</div>
                    </div>
                  </div>
                </td>
                <td className='border border-slate-200'>
                  $2340
                </td>
                <td className='border border-slate-200'>1</td>
                <td className='border border-slate-200'>
                  <button className="btn btn-ghost btn-xs">$2000</button>
                </td>
                <td className='border border-slate-200'>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor"><path d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074z" fill="blue" id="mainIconPathAttribute"></path></svg>
                </td>
              </tr>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td className='border border-slate-200'>
                  <div className="flex items-center space-x-3">
                    <div className="avatar rounded-none">
                      <div className="mask  w-18 h-16">
                      <img src="https://placeimg.com/80/80/people" />
                      </div>
                    </div>
                    <div className='text-gray-600'>
                      <div className="font-bold text-[12px]">Sample:Product Image</div>
                      <div className="font-bold text-[12px]">Color : Red</div>
                      <div className="font-bold text-[12px]">Size:L</div>
                    </div>
                  </div>
                </td>
                <td className='border border-slate-200'>
                  $2340
                </td>
                <td className='border border-slate-200'>1</td>
                <td className='border border-slate-200'>
                  <button className="btn btn-ghost btn-xs">$2000</button>
                </td>
                <td className='border border-slate-200'>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor"><path d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074z" fill="blue" id="mainIconPathAttribute"></path></svg>
                </td>
              </tr>

            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th className='border'>Total</th>
                <th className=''>2903</th>
                <th></th>
              </tr>
            </tfoot>
    
          </table>
        </div>

       {/* Close Table */}
    </div>
    <div className='ml-[300px] mt-[40px] space-x-4'>
        <button className='btn btn-outline btn-error hover:!text-white'>Continue Shopping</button>
        <button className='p-3 rounded-md hover:bg-yellow-700 active:scale-[1.1] pr-7 pl-7 text-white bg-yellow-500'>Negotiate</button>
        <button className='p-3 rounded-md hover:bg-red-700 active:scale-[1.1] pr-7 pl-7 text-white bg-red-500'> CheckOut</button>
    </div>
    <hr className='mt-[30px]'/>
  {/* card component */}
    <Card title={'Similar Items'}/>
  {/* close card component */}
 

  </div>
  </section>
  </>)
}

export default Cart