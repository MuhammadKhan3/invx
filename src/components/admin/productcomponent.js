import React from 'react'

const ProductComponent = ({select}) => {
  return (<div>
    <div className='bg-white  h-[300px] w-[1319px] ml-[45px]'>
      {/* Detail Component */}
      {select==='detail' &&<>
       {/* Detailed Information */}
       <div className='ml-[20px] relative top-[20px]'>
         <h1 className='text-[19px] font-medium'>Detailed Information</h1>
         <div className='grid grid-cols-4 grid-rows-4 !gap-0 mt-[10px] text-gray-400 gap-y-[8px]'>
            <h1>Stock Number</h1>
            <p className='text-blue-700'>903903443</p>
            <h1>Description</h1>
            <p>Used to keep the record of time</p>
            <h1>Total Stock</h1>
            <p className='text-blue-700'>324</p>
            <h1>Product Model Number</h1>
            <p className='text-blue-700'>PM-9900</p>
            <h1>Minimum Order Quantity</h1>
            <p className='text-blue-700'>2390</p>
            <h1>Default Location</h1>
            <p className='text-blue-700'>Head office/Karachi</p>
            <h1>Batch Expiration Date</h1>
            <p className='text-blue-700'>08-12-2025</p>
            <h1>Units of Purchase</h1>
            <p className='text-blue-700'>Crates</p>
         </div>
         {/* Pricing  */}
         <div className=''>
            <h1 className='text-[19px] font-medium'>Pricing</h1>
            <div className='grid grid-cols-4 grid-rows-1'>
              <h1>Vendor</h1>
              <p className='text-blue-700'>The Construction Crew</p>
              <h1>Retire Price</h1>
              <p className='text-blue-700'>$299.99</p>
            </div>
            <div className='gap-x-0 space-x-0 m-0 p-0'>
              <h1 className='inline text-gray-400  float-left'>List Price</h1>
              <p className='inline  float-left !ml-[260px]'>$9304</p>
              <br/>
              <h1 className='float-left block text-gray-400 mt-[5px]'>Cost/Unit</h1>
              <p  className='inline  float-left !ml-[260px] mt-[5px]'>$247</p>
            </div>
         </div>
         {/* close Pricing */}
       </div>
       {/* Close Detailed Information */}
              {/* Documentation */}
              <div className='   bg-white w-[540px] h-[200px] mt-[100px]'>
                <div className='text-gray-600 z-10 relative top-4'>
                <svg style={{display:'inline',marginTop:'10px',marginLeft:'10px',float:'left'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>

                  <h1 className='text-gray-600 inline font-bold text-[26px]'>Documentation</h1>
                </div>
                {/* table */}
                <div className="overflow-x-auto">
                        {/* message box */}
                        <table className="table table-zebra w-full">
                            <tbody>
                                <tr className='text-gray-400 font-medium'>
                                    <td>Name</td>
                                    <td>Description</td>
                                    <td>Status</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr className='text-blue-500 font-medium text-[14px] cursor-pointer'>
                                    
                                    <td>
                                        <div className="avatar active:scale-[1.06] inline  float-left ">
                                            <div className="w-10 rounded-full">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='relative  hover:underline active:scale-[1.01]'>Quality Control Specialist</td>
                                    <td><button className='text-green-500'>Published</button></td>
                                    <td className='  hover:border-b-2 hover:border-blue-800 active:border active:border-blue-800 '>
                                      <svg style={{color: 'rgb(37, 99, 235)'}}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" fill="#2563eb"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" fill="#2563eb"></path> </svg>
                                    </td>
                                    <td className='  hover:border-b-2 hover:border-blue-800 active:border-blue-800 active:border'>
                                      <svg style={{ color: 'rgb(37, 99, 235)'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload-fill" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z" fill="#2563eb"></path> </svg>
                                    </td>
                                    <td className='  hover:border-b-2 hover:border-blue-800  active:border-blue-800 active:border'>
                                      <svg style={{color: 'rgb(37, 99, 235)'}} viewBox="0 0 1024 1024" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path fill="#2563eb" d="M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"></path></svg>
                                    </td>
                                </tr>
                                <tr className='text-blue-500 font-medium text-[14px] cursor-pointer'>
                                    
                                    <td>
                                        <div className="avatar active:scale-[1.06] inline  float-left ">
                                            <div className="w-10 rounded-full">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='relative  hover:underline active:scale-[1.01]'>Quality Control Specialist</td>

                                    <td><button className='text-red-600 hover:text-red-800'>Uploaded</button></td>
                                    <td className='  hover:border-b-2 hover:border-blue-800 active:border-blue-800 active:border'>
                                      <svg style={{color: 'rgb(37, 99, 235)'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" fill="#2563eb"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" fill="#2563eb"></path> </svg>
                                    </td>
                                    <td className='  hover:border-b-2 hover:border-blue-800 active:border-blue-800 active:border'>
                                      <svg style={{ color: 'rgb(37, 99, 235)'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload-fill" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z" fill="#2563eb"></path> </svg>
                                    </td>
                                    <td className='  hover:border-b-2 hover:border-blue-800 active:border-blue-800 active:border'>
                                      <svg style={{color: 'rgb(37, 99, 235)'}} viewBox="0 0 1024 1024" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path fill="#2563eb" d="M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"></path></svg>
                                    </td>
                                </tr>
                                <tr className='text-blue-500 font-medium text-[14px] cursor-pointer'>
                                    
                                    <td>
                                        <div className="avatar active:scale-[1.06] inline  float-left ">
                                            <div className="w-10 rounded-full">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='relative  hover:underline active:scale-[1.01]'>Quality Control Specialist</td>

                                    <td><button className='text-yellow-400'>Not Purblished</button></td>
                                    <td className='  hover:border-b-2 hover:border-blue-800 active:border-blue-800 active:border'>
                                      <svg style={{color: 'rgb(37, 99, 235)'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" fill="#2563eb"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" fill="#2563eb"></path> </svg>
                                    </td>
                                    <td className='  hover:border-b-2 hover:border-blue-800 active:border-blue-800 active:border'>
                                      <svg style={{ color: 'rgb(37, 99, 235)'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload-fill" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z" fill="#2563eb"></path> </svg>
                                    </td>
                                    <td className='  hover:border-b-2 hover:border-blue-800 active:border-blue-800 active:border'>
                                      <svg style={{color: 'rgb(37, 99, 235)'}} viewBox="0 0 1024 1024" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path fill="#2563eb" d="M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"></path></svg>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {/* close message box */}
                    </div>
                    {/* close table div */}
                </div>
       {/* Close Documentation */}
       </>}
       {/* Close Detail Component */}
       {/* Stock Movement  */}
       {select==='movement' &&<>
       <div className=''>
        <h1 className='relative top-[20px] left-[20px] z-10 text-gray-600 text-[20px]'>Stock Movement History</h1>
       <div className="overflow-x-auto ">
                        {/* message box */}
                        <table className="table w-full mt-[30px] rounded-none">
                            <thead className=''>
                              <tr className='!rounded-none text-gray-400  uppercase font-medium'>
                                      <td>Location</td>
                                      <td>Quantity</td>
                                      <td>Movement Type</td>
                                      <td>STAKE Holder</td>
                                  </tr>
                              </thead>
                            <tbody>
                                <tr className='text-blue-500 font-medium text-[14px] cursor-pointer'>
                                  <td>Lahore </td>
                                  <td className='text-gray-600'>32</td>                
                                  <td className='text-gray-600'>Purchased</td>
                                  <td>Al marhai</td>                    
                                </tr>
                                <tr className='text-blue-500 font-medium text-[14px] cursor-pointer'>
                                  <td>Lahore </td>
                                  <td className='text-gray-600'>32</td>                
                                  <td className='text-gray-600'>Purchased</td>
                                  <td>Al marhai</td>                    
                                </tr>
                                <tr className='text-blue-500 font-medium text-[14px] cursor-pointer'>
                                  <td>Lahore </td>
                                  <td className='text-gray-600'>32</td>                
                                  <td className='text-gray-600'>Purchased</td>
                                  <td>Al marhai</td>                    
                                </tr>
                                <tr className='text-blue-500 font-medium text-[14px] cursor-pointer'>
                                  <td>Lahore </td>
                                  <td className='text-gray-600'>32</td>                
                                  <td className='text-gray-600'>Purchased</td>
                                  <td>Al marhai</td>                    
                                </tr>

                            </tbody>
                        </table>
                        {/* close message box */}
                        <button className='bg-blue-300 text-white ml-[1200px] mt-[10px] p-2 hover:bg-blue-500 active:bg-blue-800'>Extract History</button>
                    </div>
        </div>

       </>}
       {/* close Stock Movement */}
       </div>   

    </div>)
}

export default ProductComponent