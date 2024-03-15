import React from 'react'
import "../CSS/Home.css"
import Star from "../assets/icon-star.svg"
// import Plus from "../assets/icon-plus.svg"
// import Minus from "../assets/icon-minus.svg"
import { accordData } from '../DB/AccordDb'
import { useState } from 'react'

const Home = () => {
  const [selected, setSelected] = useState(null)
  
  const toggle = (i) => {
    if(selected == i) {
      return selected(i)
    }

    setSelected(i)

  }
  return (
    <>
    <div className="body">
       <div className='main md-col-12'>
           <div className="main-sec">
            {/* first */}
            <div className="pic-bg"></div>
              {/* second */}
              <div className='main-content'>
                <div className="top">
                  <img src={Star} alt="" className='topimg'/>
                  <h1>FAQs</h1>
                </div>

                   <div className="accord">
                     {accordData.map((item, i) => 
                        <div className='item'>
                          <div className="title" onClick={() => toggle(i)}>
                            <label>{item.question}</label>
                            <span>{selected == i ? "-" : "+"}</span>
                            </div> 
                           <div className={selected == i ? "description show" : "description"}>
                           <p>{item.answer}</p>
                            </div> 
                        </div>
                      )}
                   </div>
              </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default Home