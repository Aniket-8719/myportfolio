import React from 'react'
import portfolios  from '../assets/data/portfolioData'
import { IoClose } from "react-icons/io5";

const Model = ({activeID, setShowModel}) => {

    const portfolio = portfolios.find(portfolio => portfolio.id === activeID)
  return (
    <>
    <div className='w-full h-full fixed  top-0 left-0 z-10 bg-headingColor bg-opacity-40 overflow-y-auto'>
        <div className='w-[350px]   md:w-[500px]  absolute top-[55%] md:top-[56%] left-[49.7%]  z-20 bg-white rounded-[8px]
        transform -translate-x-1/2 -translate-y-1/2 p-5'>
            <div>
                <figure>
                    <img className='md:w-[480px] md:h-[270px] rounded-[8px]' src={portfolio.imgUrl} alt="" />
                </figure>
            </div>
            <div>
                <h2 className='text-2xl text-headingColor font-[700] my-4'>{portfolio.title}</h2>
                <p className='text-[15px] md:text-[15px]  leading-7  text-headingColor'>{portfolio.description}</p>
            </div>
            <div className='flex flex-wrap items-center mt-5 gap-3'>
                <h4 className='text-headingColor text-[18px] font-[700]'>Technologies:</h4>
                {portfolio.technologies.map((item, index)=>(
                    <span className='bg-grey py-1 px-2 rounded-[5px] text-[14px]'>{item}</span>
                ))}
            </div>
            <a href={portfolio.siteUrl}>
                <button
                className='bg-btnColor text-white py-2 px-4 mt-6 md:mt-4 rounded-[8px] font-[500] 
                hover:bg-headingColor ease-in duration-300'
                >Live Site</button>
            </a>
       <div className='md:flex absolute top-[3.5%] md:top-[4%] right-[6.5%] md:right-[5%] w-[1.8rem] h-[1.8rem]'>
       <button 
        onClick={()=>setShowModel(false)}
        className='w-[1.8rem] h-[1.8rem] bg-white text-[25px]
        flex items-center justify-center rounded-[3px] z-20 leading-0 cursor-pointer shadow-sm '>
            <IoClose />
        </button>
       </div>
        </div>
    </div> 
    </>
  )
}

export default Model
