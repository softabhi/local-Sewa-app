import React from 'react'
import proimg from '../assest/images/profileimg.jpeg'
import './slider.css'
import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import { globalValue } from '../../App'

const Slider = () => {
 
  const {slider,sliderFunction} = useContext(globalValue)
 
  
  return (
    <>
      <div className={slider ? "container-main active_back" : "container-main"} >
        <div className={slider ? "row active_slider" : "row slider_menu"}>
            <div className="col">
                <div className="row proimage">
                <h2 onClick={sliderFunction}>< FaTimes id='close_profile' /></h2>
                    <div className="col profile_img">
                    <img src={proimg} alt="" />
                    </div>
                </div>
                <div className="row">
                   <div className="col menu_icon">
                         <li>Home</li>
                         <li>Profile</li>
                         <li>Category</li>
                         <li>Orders</li>
                   </div>
                </div>

                <div className="row">
                  <div className="col logout_btn">
                    <button>Logout</button>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Slider