import React, {useState, useEffect} from 'react'
import data from '../assets/data/portfolioData'
import Model from './Model'


const Project = () => {

  const [nextItems, setNextItems] = useState(6)
  const [portfolios, setPortfolios] = useState(data)
  const [selectTab, setSelectTab]   = useState("all")
  const [showModel, setShowModel] = useState(false)
  const [activeID, setActiveID] = useState(null)
 
  const loadmoreHandler = ()=>{
    setNextItems(prev=> prev + 3) 
  };

  const showModelHandler = id =>{
    setShowModel(true)
    setActiveID(id)
  }

  useEffect(()=>{

    if(selectTab === "all"){
      setPortfolios(data);
    }
    if(selectTab === "web-design"){
      const filteredData = data.filter(item => item.category === "Web Design");
      setPortfolios(filteredData);
    }
    if(selectTab==='ux-design'){
      const filteredData = data.filter(item => item.category === "Ux");
      setPortfolios(filteredData);
    }
  },[selectTab]);
  return (
    <>
    <section className='mt-12' id='project'>
      <div className='mx-8 md:mx-24 '>
        <div className='flex items-center justify-between flex-wrap my-12 mb-8 md:mx-4'>
          <div className='mb-7 sm:mb-0'>
            <h3 className='text-headingColor text-[2.4rem] font-[700]'>
               My Recent Projects
            </h3>
          </div>
          <div className='flex gap-3'>
            <button 
            onClick={()=>setSelectTab('all')}
            className='text-headingColor border border-solid border-headingColor
             hover:bg-headingColor hover:text-white
            py-2 px-4 rounded-[8px]'
            >All</button>
             <button 
             onClick={()=>setSelectTab('web-design')}
            className='text-headingColor border border-solid border-headingColor
             hover:bg-headingColor hover:text-white
            py-2 px-4 rounded-[8px]'
            >Web Design</button>
             <button
             onClick={()=>setSelectTab('ux-design')} 
            className='text-headingColor border border-solid border-headingColor
             hover:bg-headingColor hover:text-white
            py-2 px-4 rounded-[8px]'
            >UX Design</button>
          </div>

        </div>

        <div className='flex items-center gap-4 flex-wrap'>
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) =>(
              <div 
              key={index}
              data-aos='fade-zoom-in'
              data-aos-delay='50'
              data-aos-duration='1000'
              className='group max-w-full sm:w-[48.5%] md:w-[31.8] lg:w-[32.2%] relative z-[1]'>
                <figure>
                  <img className='rounded-[8px]' src={portfolio.imgUrl} alt=''></img>
                </figure>

                <div className='w-full h-full bg-btnColor bg-opacity-40 absolute top-0 left-0 z-[5]
                hidden group-hover:block'>
                  <div className='w-full h-full flex items-center justify-center'>
                  <button 
                  onClick={()=>showModelHandler(portfolio.id)}
                  className='text-white bg-headingColor hover:bg-btnColor 
                  py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
                    See Details
                  </button>
                  </div>

                </div>

              </div>
            ))
        }
        </div>

        <div className='text-center mt-6'>
         {
          nextItems < portfolios.length && data.length > 6 && (

            <button onClick={loadmoreHandler} className='text-white bg-btnColor hover:bg-headingColor py-2 px-4 rounded-[8px]
            font-[500] ease-in duration-200'>
              Load More
            </button>
  
          )
         }
        </div>



      </div>
      {
        showModel && <Model setShowModel={setShowModel} activeID={activeID} />
      }
       
    </section>
      
    </>
  )
}

export default Project
