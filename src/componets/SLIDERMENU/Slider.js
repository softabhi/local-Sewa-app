import React from 'react'
import proimg from '../assest/images/profileimg.jpeg'
import './slider.css'
import { FaHippo, FaTimes } from 'react-icons/fa'
import { useContext, useRef, useState } from 'react'
import { globalValue } from '../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faHippo, faHouse, faList, faUser} from '@fortawesome/free-solid-svg-icons'


const Slider = ({ sliderRef }) => {

  // const [slider, setSlider] = useState(false);
  const { slider, sliderFunction } = useContext(globalValue)




  // const sliderFunction = () => {
  //   setSlider(!slider)
  //   // console.log(slider)
  // }

  return (
    <>
      <div className={slider ? "container-main active_back" : "container-main"} >
        <div className={slider ? "row active_slider" : "row slider_menu"}>
          <div ref={sliderRef} className="col">
            <div className="row proimage">
              <h2 onClick={sliderFunction}>< FaTimes id='close_profile' /></h2>
              <div className="col profile_img">
                <img src={proimg} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col menu_icon">
                <li><h5><FontAwesomeIcon icon={faHouse} /></h5>Home</li>
                <li><h5><FontAwesomeIcon icon={faUser} /></h5>Profile</li>
                <li><h5><FontAwesomeIcon icon={faList} /></h5>Category</li>
                <li><h5><FontAwesomeIcon icon={faBagShopping} /></h5>Orders</li>
               
              </div>
            </div>

            <div className="row">
              <div className="col ">
                <div className='logout_btn'>
                <button type="button" id='login_btn' class="btn btn-outline-primary">Login</button>
                <button type="button" id='sing_btn' class="btn btn-outline-success">SingUp</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider