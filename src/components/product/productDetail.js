import React from 'react'
import Card from '../card/card'
import Header from '../header/header'
import Slider from '../slider/slider'
import {useState} from 'react'

const ProductDetail = () => {
  const images=['1.jpg','2.jpg','3.jpg'];      
  const [img,setimag]=useState(images[0]);
  const [favourite,setfavourite]=useState([])
  const [clickimg,setimg]=useState(images[0]);
  const [incrementvalue,setincrement]=useState(1);
  const [btn,setbtn]=useState('');
  const incremenhandler=()=>{
      setincrement(incrementvalue+1);
  }
  return (<>
  <section className='h-[110rem]'>
  <Header/>
  <div className='grid grid-cols-1 w-[700px] divide-y relative left-[400px] top-[60px] '>
    <div className=''>
       <h1 className='text-red-600  font-bold text-[25px] inline-block float-left'>DETAIL PRODUCT</h1>
       {/* Bread Crumbs */}
       <div className="w-auto text-sm breadcrumbs text-red-500 text-[13px] inline-block ml-[200px]">
        <ul>
            <li><a>Long text 1</a></li>
            <li><a>Long text 2</a></li>
            <li><a>Long text 3</a></li>
        </ul>
       </div>
       {/* close bread crumbs */}
    </div>
    <div>
    {/* product detail card*/}
    <div className=''>
       <div className='flex flex-col w-200px float-left'>
          <div>
            <div className='rating ml-[-40px] mt-[30px] w-30px  w-[40px]'>
              <input type="radio" name="rating-3" className={`h-[70px]  mt-1 mask mask-heart bg-slate-200  hover:bg-red-600 ${favourite.includes(2)===true ?'bg-red-600':''} `} onClick={()=>{setfavourite(old=>[...old,2])}}/>
            </div>
            <img src={require(`../images/${clickimg}`)}    className='h-[400px] w-[320px] mt-[30px] float-left border shadow-xl border-slate-200'/>
            <div className='p-2  rounded-md hover:text-red-600    inline-block absolute ml-[-39px] mt-[90px]  bg-slate-200 hover:bg-blue-500'>
              <svg style={{color: 'white',}} xmlns="http://www.w3.org/2000/svg" width="13" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16"> <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="white"></path> </svg>
            </div>
          </div>
          <div className="w-[200px] flex flex-row space-x-2 ">
            {images.map((value,i)=>{
                return(<div key={value}><img  onClick={()=>{setimg(images[i])}} src={require(`../images/${value}`)} className={`opacity-[0.6] w-[100px]   h-[80px]   float-left inline-block ${value===images[images.findIndex(value=>{return clickimg===value})] ? 'opacity-[1]' :''}`}/></div>)    
            })}
            <div className='bg-slate-200 hover:bg-slate-500 h-[40px] mt-5 p-2' onClick={()=>{
                console.log(images.length)
                console.log(images.findIndex((value)=>value===clickimg))
                if(images.findIndex((value)=>value===clickimg)<images.length-1){
                    console.log('in')
                    console.log(typeof images[images.findIndex((value)=>value===clickimg)+1]);
                     setimg(images[images.findIndex((value)=>value===clickimg)+1]);
                    console.log(clickimg)
                }
            }}>
              <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" fill="white"></path> </svg>
            </div>
          </div> 
        </div>
        <div className='float-left ml-[100px] mt-5'>
           <h3 className='w-[200px] text-[23px] font-bold'>Sample Product Design</h3>
           <div className="flex flex-row rating rating-sm space-x-1">
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            </div>
            <div className='w-[280px]'>
                <h3 className='text-slate-400'>Overview</h3>
                <p >A product detail page (PDP) is a web page on an eCommerce site that presents the description of a specific product in view. The details displayed often include size, color, price, shipping information, reviews</p>
                <p className='text-slate-400'>Purchase in</p>
            </div>
        </div>
        <br/>
        <div className='ml-[400px] space-x-2 mt-5'>
           <button className={`btn  border-none hover:bg-blue-400 text-white ${btn==='book'? 'bg-blue-400 text-white':'bg-gray-300'} p-5 `} onClick={()=>{setbtn('box')}}>BOX</button>
           <button className={`btn border-none btn-active hover:bg-blue-400 text-white ${btn==='palatte'? 'bg-blue-400 text-white':'bg-gray-300'} p-5`} onClick={()=>{setbtn('palatte')}}>PALATTE</button>
           <button className={`btn border-none btn-active hover:bg-blue-400 text-white ${btn==='crate' ? 'bg-blue-400 text-white':'bg-gray-300'} p-5`} onClick={()=>{setbtn('crate')}}>CRATE</button>
        </div>
        <div className='flex flex-row text-gray-400 text-[14px] ml-[400px] mt-5 space-x-9'>
            <p>Minimum Qty Order </p>
            <p>Batch Expiry Date </p>
        </div>

            <div className='flex flex-row  font-bold ml-[400px] mt-5 space-x-[150px] '>
                <p className=''>34 </p>
                <p className=''>28 JUNE 2018</p>
            </div>
            <hr className='w-[140px] ml-[400px] mt-[15px]'/>
            {/* {btn.length>0 && */}
            <div className=''>
                <div className='ml-[400px]'>
                    <p className='text-[25px] font-bold'>$200.00/<span className='text-[15px]'>{btn}</span></p>
                </div>
                {/* } */}
                <div className="ml-[400px]">
                    <input type="number" placeholder="Type here" value={incrementvalue} onChange={()=>{setincrement(incrementvalue+1)}} className="w-[70px] pl-10 h-7 border border-slate-300" />
                    <span className="bg-slate-700 text-white p-[3px] " onClick={incremenhandler}>+</span>
                </div>
                <div className='ml-[400px] mt-[20px]  '>
                   <button className="btn btn-outline btn-error hover: text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> <span className='ml-[10px] pl-5 pr-5'>Add To Cart</span></button>
                </div>
            </div>
            <hr className='mt-[30px]'/>
            <div className='mt-[30px]'>
                <h1 className='text-[25px] font-bold'>DETAIL DESCRIPTION</h1>
                <p className='mt-[20px]'>A paragraph is a group of sentences that fleshes out a single idea. In order for a paragraph to be effective, it must begin with a topic sentence, have sentences that support the main idea of that paragraph, and maintain a consistent flow. informs and entertains your reader about your paper's overall idea.</p>
            </div>
            <div>
                <h1 className='text-[25px] font-bold mt-3'>Product Documents</h1>
                <div className='flex flex-row space-x-7'>
                    <div className='flex flex-col mt-[15px]'>
                        <img src={require('../images/1.jpg')} className='border border-gray-400 w-[140px] h-[90px] opacity-[0.7] hover:opacity-[1]' width='200' height='50'/>
                        <p className='mt-1 ml-3'>Image one is</p>
                    </div>
                    <div className='flex flex-col mt-[15px]'>
                        <img src={require('../images/2.jpg')} className='border border-gray-400 w-[140px] h-[90px] opacity-[0.7] hover:opacity-[1]' width='200' height='50'/>
                        <p className='mt-1 ml-3'>Image two is</p>
                    </div>
                    <div className='flex flex-col mt-[15px]'>
                        <img src={require('../images/3.jpg')} className='border border-gray-400 w-[140px] h-[90px] opacity-[0.7] hover:opacity-[1]' width='200' height='50'/>
                        <p className='mt-1 ml-3'>Image three is</p>
                    </div>
                </div>            
            </div>
 </div>
    {/* close product detail card */}
  {/* card component */}
    <Card title={'Similar Items'}/>
  {/* close card component */}
    </div>
  </div>
  </section>
    </>)
}
export default ProductDetail