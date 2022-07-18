import React, { useState } from 'react'
import Inventory from './graph';
import AdminHeader from './header';

const Dashboard = () => {
    const [sidemenu,setsidemenu]=useState(false);
  return (<>
  <AdminHeader setmenu={setsidemenu}/>
  {/* Dashboard */}
  <div className={`block relative  bg-gray-100 w-[1599px] h-[689px]  `}>
    <div className={`w-[1400px]  h-[689px] relative flex flex-row flex-wrap ${sidemenu ? 'left-[200px]':''}`}>
    
    {/* Inventory Trend */}
          <div className='h-[355px] w-[800px]  rounded-2xl bg-white relative top-3 left-10   text-cyan-600 '>
           
            <h1 className='ml-[30px] relative top-5 font-bold'>
              Inventory Sales Trend
            </h1>
              <Inventory/> 
           

    {/*  close Inventory Trend */}
         {/* start trend pages button */}
        <div className='absolute top-0 left-[550px] mt-5  flex-col space-y-3 '>
         {/* sale btn  */}
         <div className='flex flex-col text-justify   border-none rounded-lg   m-0 bg-[#f3f4f6] h-[100px] w-[190px] text-[#0f766e] hover:scale-[1.1]'>
              <div className='ml-[20px] mt-3'> 
                <p className='text-[12px]'>Total Sales Trend </p>
                <p className='text-[29px] font-normal   mt-[2px]'>24804</p>
              </div>
         </div>
         {/* close sale btn */}

         {/* Total items */}
         <div className='flex flex-col   border-none  m-0 bg-[#f3f4f6]   w-[190px] text-[#0f766e] h-[100px] rounded-lg hover:scale-[1.1]'>
              <div className='ml-[20px] mt-3'>
                <p className='text-[12px]'>Total items in Inventory </p> 
                <p className='text-[29px] font-normal   mt-[2px]'>81</p>
              </div>      
           </div>
         {/* close total items */}
         {/* Total Carried */}
         <div className='flex flex-col   border-none   m-0 bg-[#f3f4f6]  w-[190px] text-[#0f766e] h-[100px] rounded-lg hover:scale-[1.1]'>
              <div className='ml-[20px] mt-3 '>
                <p className='text-[14px]'>Total Carried Inventory</p>
                <p className='text-[29px] font-normal   mt-[2px]'>2433</p>
              </div>
         </div>
         {/* Close Total Carried */}
        </div>
      </div>
      {/* close Trend badges component */}

          <div className='flex flex-col   space-y-2  relative mt-10 ml-[50px] h-[200px] '>
            <button className='bg-gray-300  p-1 pl-6 pr-6  rounded-lg hover:bg-primary hover:text-white active:scale-[1.1]'>
              Yearly
            </button>
            <button className='bg-gray-300  p-1 pl-6 pr-6  rounded-lg hover:bg-primary hover:text-white active:scale-[1.1]'>
              Monthly
            </button>
            
            <button className='bg-gray-300  p-1 pl-6 pr-6  rounded-lg hover:bg-primary hover:text-white active:scale-[1.1]'>
              Daily
            </button>
          </div>
          {/* Start Fast Moving Component */}
            <div className=' bg-base-100 w-[400px] ml-[30px] rounded-2xl h-[355px] mt-3 p-5'>
             <h1 className='text-cyan-600 font-medium '>Fast Moving Stock</h1>
             
            <div className='flex flex-col space-y-5 mt-8'>
 
              {/* Fast moving list 1 */}
                <div>
                      <div class="avatar cursor-pointer active:scale-[1.01] float-left inline-block">
                          <div class="w-11 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                          </div>
                      </div>
                      <div className='float-left inline-block ml-3'>
                        <h1 className='text-[14px] text-cyan-600 font-medium' >Package 01</h1>
                        <p  className='text-[10px] text-cyan-600 font-medium'>an anchor to be accessed</p>
                      </div>
                      <div className='ml-[120px] inline-block'>
                        <h1 className='text-cyan-600 text-[14px] font-medium'>$233,50</h1>
                      </div>
                </div>
              {/* Close Fast moving 1 */}
              {/* Fast moving list  2 */}
                  <div>
                      <div class="avatar cursor-pointer active:scale-[1.01] float-left inline-block">
                          <div class="w-11 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                          </div>
                      </div>
                      <div className='float-left inline-block ml-3'>
                        <h1 className='text-[14px] text-cyan-600 font-medium' >Package 01</h1>
                        <p  className='text-[10px] text-cyan-600 font-medium'>an anchor to be accessed</p>
                      </div>
                      <div className='ml-[120px] inline-block'>
                        <h1 className='text-cyan-600 text-[14px] font-medium'>$233,50</h1>
                      </div>
                  </div>
              {/* Close Fast moving 2 */}
              {/* Fast moving list 3 */}
                  <div>
                      <div class="avatar cursor-pointer active:scale-[1.01] float-left inline-block">
                          <div class="w-11 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                          </div>
                      </div>
                      <div className='float-left inline-block ml-3'>
                        <h1 className='text-[14px] text-cyan-600 font-medium' >Package 01</h1>
                        <p  className='text-[10px] text-cyan-600 font-medium'>an anchor to be accessed</p>
                      </div>
                      <div className='ml-[120px] inline-block'>
                        <h1 className='text-cyan-600 text-[14px] font-medium'>$233,50</h1>
                      </div>
                  </div>
              {/* Close Fast moving 4 */}
                            {/* Fast moving list 3 */}
                            <div>
                      <div class="avatar cursor-pointer active:scale-[1.01] float-left inline-block">
                          <div class="w-11 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                          </div>
                      </div>
                      <div className='float-left inline-block ml-3'>
                        <h1 className='text-[14px] text-cyan-600 font-medium' >Package 01</h1>
                        <p  className='text-[10px] text-cyan-600 font-medium'>an anchor to be accessed</p>
                      </div>
                      <div className='ml-[120px] inline-block'>
                        <h1 className='text-cyan-600 text-[14px] font-medium'>$233,50</h1>
                      </div>
                  </div>
              {/* Close Fast moving 4 */}
            </div>
              
          </div>
          {/* close fast moving */}
          <br/>
          {/* Total Member */}
            <div className='absolute top-[375px] ml-[40px] inline float-left '> 
              <div className='bg-base-100 w-[500px]  rounded-2xl h-[225px]   flex flex-col text-cyan-600  '>

                <div className='mt-[20px] divide-y-[1px] space-y-4'>
                              {/* Total Member list 1 */}
                    <div className='inline-grid grid-rows-1 grid-cols-3 ml-[20px] mt-[5px] '>
                      <div className='w-[70px] text-[] font-medium'>
                        <h1>Total Member</h1>
                      </div>
                      <div className='flex flex-row'>
                          <div>
                            <svg style={{color: 'rgb(144, 232, 120)',marginTop:'15px'}} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                          </div>
                          <div className='ml-4'>
                            <p className='text-[11px]'>Last Year</p>
                            <p>1,443,444</p>                
                          </div>
                          <div className='ml-[80px] mt-2 font-medium text-[25px]'>
                              1,344,44
                          </div>
                      </div>
          
                    </div>
                    {/* close Total member list 1 */}
                    {/* Total member list 2 */}
                    <div className='inline-grid grid-rows-1 grid-cols-3 ml-[20px] mt-[5px]'>
                      <div className='w-[70px] text-[] font-medium'>
                        <h1>Total Member</h1>
                      </div>
                      <div className='flex flex-row'>
                          <div className='mt-[3px]'>

                           <svg style={{color: 'rgb(255, 102, 102)'}} xmlns="http://www.w3.org/2000/svg" width='34' height='34' viewBox="0 0 576 512"><path d="M466.7 352L320 205.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6L9.372 150.6C-3.124 138.1-3.124 117.9 9.372 105.4C21.87 92.88 42.13 92.88 54.63 105.4L191.1 242.7L297.4 137.4C309.9 124.9 330.1 124.9 342.6 137.4L512 306.7V223.1C512 206.3 526.3 191.1 544 191.1C561.7 191.1 576 206.3 576 223.1V384C576 401.7 561.7 416 544 416H384C366.3 416 352 401.7 352 384C352 366.3 366.3 352 384 352L466.7 352z" fill="#ff6666"></path></svg>
                          </div>
                          <div className='ml-4'>
                            <p className='text-[11px]'>Last Year</p>
                            <p>1,443,444</p>                
                          </div>
                          <div className='ml-[80px] mt-2 font-medium text-[25px]'>
                              1,344,44
                          </div>
                      </div>
          
                    </div>
                    {/* close Total Member list 2 */}
                    {/* Total member list 3 */}
                    <div className='inline-grid grid-rows-1 grid-cols-3 ml-[20px] mt-[5px]'>
                      <div className='w-[70px] text-[] font-medium'>
                        <h1>Total Member</h1>
                      </div>
                      <div className='flex flex-row'>
                          <div>
                            <svg style={{color: 'rgb(144, 232, 120)',marginTop:'15px'}} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                          </div>
                          <div className='ml-4'>
                            <p className='text-[11px]'>Last Year</p>
                            <p>1,443,444</p>                
                          </div>
                          <div className='ml-[80px] mt-2 font-medium text-[25px]'>
                              1,344,44
                          </div>
                      </div>
          
                    </div>
                    {/* close Total Member list 3 */}
                </div>
                      {/* New Member */}
                      <div className='bg-primary rounded-2xl text-white mt-[30px] p-2'>
                          <div className='inline-grid grid-rows-1 grid-cols-4 ml-[20px] mt-[5px] '>
                          <div className='w-[70px] text-[14px] '>
                            <h1>New Member</h1>
                          </div>
                          <div className='flex flex-row'>
                              <div className='bg-lime-300 h-[40px] w-[80px]  rounded-full'>
                                <svg style={{color: 'rgb(86, 85, 82)',marginTop:'10px'}} xmlns="http://www.w3.org/2000/svg" width="40" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                              </div>
                              <div className='ml-2'>
                                <p className='text-[11px] w-[50px]'>Last Year</p>
                                <p className='text-[11px]'>1,443</p>                
                              </div>
                              <div className='bg-pink-300 h-[40px] w-[80px]  rounded-full ml-5 text-gray'>

                              <svg style={{color: 'rgb(86, 85, 82)',marginTop:'5px'}} xmlns="http://www.w3.org/2000/svg" width="40" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-down"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
                              </div>
                              <div className='ml-2'>
                                <p className='text-[11px] w-[50px]'>Last Year</p>
                                <p className='text-[11px] font-bold'>1,443</p>                
                              </div>

                                <div className='bg-lime-300 h-[40px] w-[80px]  rounded-full ml-10'>
                                  <svg style={{color: 'rgb(86, 85, 82)',marginTop:'10px'}} xmlns="http://www.w3.org/2000/svg" width="40" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                </div>
                                <div className='ml-1'>
                                  <p className='text-[11px] w-[50px]'>Last Year</p>
                                  <p className='text-[11px]'> 1,443</p>                
                                </div>
                          </div>
                        </div>
                      </div>
                      {/* Close New Member */}


              </div>
              {/* Close Total Member */}
           
            </div>
                       {/*purchase request  */}
           <div className='inline bg-base-100 w-[400px] absolute left-[570px] top-[375px]   rounded-2xl h-[297px]  p-2'>
             <h1 className='text-cyan-600 font-medium ml-[10px] mt-[6px] '>Purchase Request<span className='ml-[65px] mt-[15px]'><div class="badge badge-lg badge-error text-white text-[14px]">4</div></span></h1>
             
            <div className='flex flex-col space-y-2  divide-y-[1px] ml-[10px] mt-[10px]'>
 
              {/* purchase request 1*/}
                <div className='mt-1'>
                      <div class="avatar cursor-pointer active:scale-[1.01] float-left inline-block mt-[10px]">
                          <div class="w-11 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                          </div>
                      </div>
                      <div className='float-left inline-block ml-3'>
                        <h1 className='text-[18px] text-cyan-600 font-medium' >seteve Bold <span className='ml-[170px] text-[13px]'>14:45</span></h1>
                        <p  className='text-[10px] text-cyan-600 font-medium'>an anchor to be accessed</p>
                        <div className='w-[250px] mt-[5px]'>
                          <p  className='text-[10px] text-cyan-600 font-medium'> plugin for Tailw. Faster development. </p>
                        </div>
                      </div>

                </div>
              {/* purchase request 1 */}
              {/* purchase request 2 */}
                  <div className='mt-3'>
                          <div class="avatar cursor-pointer active:scale-[1.01] float-left inline-block mt-[10px]">
                              <div class="w-11 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                              </div>
                          </div>
                          <div className='float-left inline-block ml-3'>
                            <h1 className='text-[18px] text-cyan-600 font-medium' >seteve Bold <span className='ml-[170px] text-[13px]'>14:45</span></h1>
                            <p  className='text-[10px] text-cyan-600 font-medium'>an anchor to be accessed</p>
                            <div className='w-[250px] mt-[10px]'>
                              <p  className='text-[10px] text-cyan-600 font-medium'> plugin for Tailwind CSS. Faster development. </p>
                            </div>
                          </div>

                    </div>
                  {/* close purchase request 2 */}
                
                  {/* start purchase request 3 */}
                  <div className='mt-3'>
                          <div class="avatar cursor-pointer active:scale-[1.01] float-left inline-block mt-[10px]">
                              <div class="w-11 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                              </div>
                          </div>
                          <div className='float-left inline-block ml-3'>
                            <h1 className='text-[18px] text-cyan-600 font-medium' >seteve Bold <span className='ml-[170px] text-[13px]'>14:45</span></h1>
                            <p  className='text-[10px] text-cyan-600 font-medium'>an anchor to be accessed</p>
                            <div className='w-[250px] mt-[10px]'>
                              <p  className='text-[10px] text-cyan-600 font-medium'> plugin for Tailwind CSS. Faster development. </p>
                            </div>
                          </div>
                    </div>
                  {/* Close purchase request 3 */}
                  <div className='h-[20px]'>
                    <button className='ml-[290px] btn-link text-cyan-600  !text-[12px]'>See all ticket</button>
                  </div>
                </div>
                  
              </div>
           {/* purchase request*/}
             
            {/*  lastest sale*/}
            <div className='inline bg-base-100 w-[400px] absolute left-[986px] top-[375px]   rounded-2xl h-[297px]  p-2 '>
             <h1 className='text-cyan-600 text-[18px] font-medium ml-[15px] '>Latest Sale<span className='ml-[220px] mt-[15px] text-cyan-600 text-[16px]'>+260</span></h1>
             
            <div className='flex flex-col space-y-2   ml-[10px] mt-[10px] text-cyan-600 odd:bg-white even:bg-slate-50'>
              {/* list 1 */}
              <div className='flex flex-row odd:bg-white even:bg-slate-50 pl-2 pr-2'>
                  <div className='align-text-top'>
                    <h1 className='font-medium text-[18px]'>Angile Julia</h1>
                    {/* location */}
                    <p className='text-[10px]  font-medium m-0'>Maloburee</p>
                  </div>
                  <div className='ml-16 mt-[10px]'>
                    <p className='text-[12px]  font-medium'>25 aug 2019</p>
                  </div>
                  <div className='ml-24'>
                    <p className='text-[16px]   font-medium'>$21.1</p>
                  </div>
              </div>
              {/* close list1 */}
              {/* list 2 */}
              <div className='flex flex-row odd:bg-white even:bg-slate-50  pl-2 pr-2'>
                  <div className='align-text-top'>
                    <h1 className='font-medium text-[18px]'>Angile Julia</h1>
                    {/* location */}
                    <p className='text-[10px]  font-medium m-0'>Maloburee</p>
                  </div>
                  <div className='ml-16 mt-[10px]'>
                    <p className='text-[12px]  font-medium'>25 aug 2019</p>
                  </div>
                  <div className='ml-24'>
                    <p className='text-[16px]   font-medium'>$21.1</p>
                  </div>
              </div>
              {/* close list 2 */}
              {/* list 3 */}
              <div className='flex flex-row  odd:bg-white even:bg-slate-50 pl-2 pr-2'>
                  <div className='align-text-top'>
                    <h1 className='font-medium text-[18px]'>Angile Julia</h1>
                    {/* location */}
                    <p className='text-[10px]  font-medium m-0'>Maloburee</p>
                  </div>
                  <div className='ml-16 mt-[10px]'>
                    <p className='text-[12px]  font-medium'>25 aug 2019</p>
                  </div>
                  <div className='ml-24'>
                    <p className='text-[16px]   font-medium'>$21.1</p>
                  </div>
              </div>

              {/* close list 3 */}

              {/* list 4 */}
              <div className='flex flex-row  odd:bg-white even:bg-slate-50 pl-2 pr-2'>
                  <div className='align-text-top'>
                    <h1 className='font-medium text-[18px]'>Angile Julia</h1>
                    {/* location */}
                    <p className='text-[10px]  font-medium m-0'>Maloburee</p>
                  </div>
                  <div className='ml-16 mt-[10px]'>
                    <p className='text-[12px]  font-medium'>25 aug 2019</p>
                  </div>
                  <div className='ml-24'>
                    <p className='text-[16px]   font-medium'>$21.1</p>
                  </div>
              </div>
              {/* close list 4 */}
                            {/* list 3 */}
                            <div className='flex flex-row  odd:bg-white even:bg-slate-50 pl-2 pr-2'>
                  <div className='align-text-top'>
                    <h1 className='font-medium text-[18px]'>Angile Julia</h1>
                    {/* location */}
                    <p className='text-[10px]  font-medium m-0'>Maloburee</p>
                  </div>
                  <div className='ml-16 mt-[10px]'>
                    <p className='text-[12px]  font-medium'>25 aug 2019</p>
                  </div>
                  <div className='ml-24'>
                    <p className='text-[16px]   font-medium'>$21.1</p>
                  </div>
              </div>

              {/* close list 3 */}
            </div>
              <div className='h-[20px] mt-[-12px]'>
                <button className='ml-[260px]  text-cyan-600  !text-[12px] hover:underline'>See all Transaction</button>
              </div>
              
          </div>
            {/* Close Purchase Request */}
             
      </div>

 </div>
{/*close  Dashboard */}
</>
  )
}

export default Dashboard