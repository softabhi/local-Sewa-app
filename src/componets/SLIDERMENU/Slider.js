import React from 'react'

import './slider.css'
import { useContext } from 'react'
import { globalValue } from '../../App'

const Slider = () => {
 
  const {slider} = useContext(globalValue)
 
  
  return (
    <>
      <div className={slider ? "container active_slider" : "container slider_menu"} >
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col">
                    <img src="" alt="" />
                    </div>
                </div>
                <div className="row">
                   <div className="col">
                         <li>Home</li>
                         <li>Profile</li>
                         <li>Category</li>
                         <li>Orders</li>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Slider