import React, { useState } from 'react'

const Card = ({title}) => {
    const [favourite,setfavourite]=useState([]);
      return (<>
  <div>
                <h1 className='text-[25px] font-bold mt-3'>{title}</h1>
  </div>
  
  <div className='flex flex-row space-x-3 mt-4'>
    
    {/* card1 */}
        <div className="card card-compact w-[240px] rounded-none bg-base-100 shadow-xl ">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        {/* rating 1 */}
        <div className="card-body">
          <div className="rating rating-sm space-x-2">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
        </div>
        {/* close rating 1 */}
        {/* card description */}
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
        {/* close card description */}
        {/* Card price */}
        <div className='text-red-500 ml-[20px] mt-[10px] font-bold text-[18px]'>
          <h1>$225.50</h1>
        </div>
        {/* Card price */}
       </div>
       
    {/*close card1 */}

    {/* Card 2 */}
    <div className="card card-compact w-[240px] rounded-none bg-base-100 shadow-xl ">
        {/* Card Image  */}
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        {/* Close Card Image */}
        {/* Card rating  */}
        <div className="card-body">
          <div className="rating rating-sm space-x-2">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"  />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
        </div>
        {/* close Card rating */}
        {/* Card Description  */}
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
        {/* Close Card Description */}
        {/* Card Price  */}
        <div className='text-red-500 ml-[20px] mt-[10px] font-bold text-[18px]'>
          <h1 className=''>$225.50</h1>
        </div>
        {/* Card Price  */}
       </div>
    {/* close Card 2 */}
    {/* card 3 */}
    <div className="card card-compact w-[240px] rounded-none bg-base-100 shadow-xl ">
         {/* card image */}
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        {/* close card image */}

        {/* rating component */}
        <div className="card-body">
          <div className="rating rating-sm space-x-2">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
        </div>
        {/* close rating component */}
        {/* Card Description */}
        <div className='flex flex-row'>
            <div>
              <h2 className="text-[14px] mt-4">Sample Product</h2>
            </div>
            <div className='rating ml-[60px] w-30px'>
              <input type="radio" name="rating-3" className={`h-[50px] mt-1 mask mask-heart bg-slate-200  hover:bg-red-600 ${favourite.includes(3)===true ?'bg-red-600':''} `} onClick={()=>{setfavourite(old=>[...old,3])}} />
            </div>
        </div>
        <hr className='m-0'/>
        </div>
        <div className='w-[150px] m-0 ml-5  '>
          <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur  dolor sit amet, consectetur  </p>
        </div>
        {/* Close Card description */}
        {/* card price  */}
        <div className='text-red-500 ml-[20px] mt-[10px] font-bold text-[18px] pb-2'>
          <h1>$225.50</h1>
        </div>
        {/* card price */}
       </div>
    {/* close card 3 */}
      </div>
    </>
  )
}

export default Card