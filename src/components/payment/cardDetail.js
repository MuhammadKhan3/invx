

import React from 'react'
import Card from '../card/card'
import { useState } from 'react'
import Header from '../header/header'

const CardDetail = () => {
    const [favourite,setfavourite]=useState([]);
  return (
  <>
   <div className=' h-[86rem]'>
        <Header/>
        <div className=' w-[350px] relative left-[400px] top-[60px] flex flex-row'>
           <div className='w-[350px]'>
                <h1 className='text-red-600  font-bold text-[25px] inline-block float-left'>DETAIL PRODUCT</h1>
                {/* Bread Crumbs */}
                <div className="w-auto text-sm breadcrumbs text-red-500 text-[13px] inline-block ml-[300px] mt-[-15rem]" >
                    <ul>
                        <li><a>Long text 1</a></li>
                        <li><a>Long text 2</a></li>
                        <li><a>Long text 3</a></li>
                    </ul>
                </div>
                {/* close bread crumbs */}
                <hr className='w-[650px]'/>
                    <div className="w-[300px]">
                        <label className="label">
                            <p className="label-text font-bold  text-[16px]">Shipping information<span className='text-red-600 ml-[72px]'><a>Change</a></span></p> 
                        </label> 
                        <div className='w-[350px] h-[150px] bg-slate-100 mt-3'>
                            <p className='ml-5 mt-5 p-2 text-gray-400'>Contact <span className='text-black'>0303944444</span></p>
                            <hr/>
                            <p className='ml-5  p-2 text-gray-400'>Ship id <span className='text-black'>kdflj@gmail.com</span></p>
                            <hr/>
                            <p className='ml-5  p-2 text-gray-400'>Contact <span className='text-black'>$2930.00 <span className='text-[12px] text-gray-400'>(internation shipping)</span></span></p>
                        </div>
                        {/* radion buton component */}
                        <div>
                            <h1 className='text-[13px] font-bold mt-4'>Delivery</h1>
                            <p className='text-[13px] text-gray-500'>Select your service provider</p>
                            <div>
                            
                                <input type="text" placeholder="Card No" className="input input-bordered w-[390px] h-[40px] block"/> 
                                <input type="text" placeholder="Name Card Holder" className="input input-bordered w-[390px] h-[40px] block mt-3"/>
                                <div className='flex flex-row space-x-6 mt-3'>
                                    <input type="text" placeholder="Shipping Address" className="input input-bordered w-[180px] h-[40px] block"/> 
                                    <input type="text" placeholder="City" className="input input-bordered w-[180px] h-[40px] block"/> 
                                </div>
                                <input type="checkbox"  className="checkbox checkbox-sm mt-4" name='save' id='save'/> <label htmlFor='save'>Save information</label>
 
                              {/* <input type="radio" name="radio-1" className="mt-[13px] radio radio-sm" id='credit' /><label htmlFor='credit'  className='text-[14px] relative top-[-4px] ml-4'>Credit Card</label><br/>
                              <input type="radio" name="radio-1" className="radio radio-sm" id='IBFT' /><label htmlFor='IBFT'  className='text-[14px]  relative top-[-4px] ml-4'>IBFT</label><br/>
                              <input type="radio" name="radio-1" className="radio radio-sm" id='creditline' /><label htmlFor='creditline' className='text-[14px]  relative top-[-4px] ml-4'>Payment via line of credit </label> */}
                            </div>
                            <div className='ml-[280px] mt-6'>
                                <button className="btn btn-error text-white hover:bg-red-600 ">CheckOut</button>
                            </div>
                        </div>
                        {/* close radion buton component */}
                    </div>      
                    </div>
        </div>
    <div className='bg-slate-100 w-[400px] h-[420px] p-5 absolute top-0 left-[800px] mt-[290px] flex flex-col space-y-7'>
            <div className='flex flex-row'>
                <div>
                   <img src={require('../images/1.jpg')} className='h-[80px] w-[80px]'/>
                   <p className='inline-block relative top-[-84px] left-[68px] text-white bg-gray-300 p-[3px] rounded-full'>1</p>
                </div>
                <div className='ml-3 '>
                    <h1 className='text-[13px] font-bold'>Sample PRODUCT</h1>
                    <h1 className='text-[13px] font-bold'>Color : Red</h1>
                    <h1 className='text-[13px] font-bold'>Size : L</h1>
                    <h1 className='text-red-500 mt-1 font-bold'>$250.00</h1>
                </div>
            </div>
            <div className='flex flex-row'>
                <div>
                   <img src={require('../images/1.jpg')} className='h-[80px] w-[80px]'/>
                   <p className='inline-block relative top-[-84px] left-[68px] text-white bg-gray-300 p-[3px] rounded-full'>1</p>

                </div>
                <div className='ml-3 '>
                    <h1 className='text-[13px] font-bold'>Sample PRODUCT</h1>
                    <h1 className='text-[13px] font-bold'>Color : Red</h1>
                    <h1 className='text-[13px] font-bold'>Size : L</h1>
                    <h1 className='text-red-500 mt-1 font-bold'>$250.00</h1>
                </div>
            </div>
            <hr className='border border-gray-300'/>
            <div>
                <h1 className='text-[12px] font-bold'>Sub Total <span className='ml-[100px] text-red-500'>$400.00</span></h1>
                <h1 className='text-[12px] font-bold'>Shipping<span className='ml-[106px] text-red-500'>$200.00</span></h1>
            </div>
            <div>
            <h1 className='text-[14px] font-bold'>Total<span className='ml-[122px] text-red-500'>$200.00</span></h1>
            </div>
            
        </div>
        <div className=''>
            <hr className='mt-[180px] w-[600px] ml-[400px]'/>
        </div>
            <h1 className='ml-[400px] mt-10 text-[25px] font-bold'>Related</h1>
            <div className='flex flex-row space-x-2 ml-[1000px] mt-[-32px]'>
              <div className='bg-gray-300 p-3 rounded-lg hover:bg-gray-600'>
                <svg xmlns="http://www.w3.org/2000/svg" cla width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> </svg>
              </div>
              <div className='bg-gray-300 p-3 rounded-lg hover:bg-gray-600'>
                <svg style={{color: 'rgb(78, 77, 70)'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" fill="#4e4d46"></path> </svg>
              </div>
           </div>
 
        <div className='flex flex-row space-x-3 mt-[70px] ml-[400px]'>

    {/* card1 */}
        <div className="card card-compact w-[240px] rounded-none bg-base-100 shadow-xl ">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
          <div className="rating rating-sm space-x-2">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
        </div>
        <div className='flex flex-row'>
            <div>
              <h2 className="text-[14px] mt-4">Sample Product</h2>
            </div>
            <div className='rating ml-[60px] w-30px'>
              <input type="radio" name="rating-3" className={`h-[50px] mt-1 mask mask-heart bg-slate-200  hover:bg-red-600 ${favourite.includes(1)===true ?'bg-red-600':''} `} onClick={()=>{setfavourite(old=>[...old,1])}} />
            </div>
        </div>
        <hr/>
        </div>
        <div className='w-[150px] ml-5'>
          <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur  dolor sit amet, consectetur  </p>
        </div>
        <div className='text-red-500 ml-[20px] mt-[30px] font-bold text-[20px]'>
          <h1>$225.50</h1>
        </div>
       </div>
       
    {/*close card1 */}
    {/* Card 2 */}
    <div className="card card-compact w-[240px] rounded-none bg-base-100 shadow-xl ">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
          <div className="rating rating-sm space-x-2">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"  />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
        </div>
        <div className='flex flex-row'>
            <div>
              <h2 className="text-[14px] mt-4">Sample Product</h2>
            </div>
            <div className='rating ml-[60px] w-30px'>
              <input type="radio" name="rating-3" className={`h-[50px] mt-1 mask mask-heart bg-slate-200  hover:bg-red-600 ${favourite.includes(2)===true ?'bg-red-600':''} `} onClick={()=>{setfavourite(old=>[...old,2])}}/>
            </div>
        </div>
        <hr/>
        </div>
        <div className='w-[150px] ml-5'>
          <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur  dolor sit amet, consectetur  </p>
        </div>
        <div className='text-red-500 ml-[20px] mt-[30px] font-bold text-[20px]'>
          <h1>$225.50</h1>
        </div>
       </div>
    {/* close Card 2 */}
    {/* card 3 */}
    <div className="card card-compact w-[240px] rounded-none bg-base-100 shadow-xl ">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
          <div className="rating rating-sm space-x-2">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
        </div>
        <div className='flex flex-row'>
            <div>
              <h2 className="text-[14px] mt-4">Sample Product</h2>
            </div>
            <div className='rating ml-[60px] w-30px'>
              <input type="radio" name="rating-3" className={`h-[50px] mt-1 mask mask-heart bg-slate-200  hover:bg-red-600 ${favourite.includes(3)===true ?'bg-red-600':''} `} onClick={()=>{setfavourite(old=>[...old,3])}} />
            </div>
        </div>
        <hr/>
        </div>
        <div className='w-[150px] ml-5'>
          <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur  dolor sit amet, consectetur  </p>
        </div>
        <div className='text-red-500 ml-[20px] mt-[30px] font-bold text-[20px]'>
          <h1>$225.50</h1>
        </div>
       </div>
    {/* close card 3 */}
      </div>
    </div>

 </>
  )
}

export default CardDetail