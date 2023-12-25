import React from 'react'
import { useState, useContext } from 'react';
import { FaOutdent, FaSearch, FaRegUserCircle, FaSignInAlt,fsPerson  } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { globalValue } from '../../App';

import './navbarstyle.css';


const Navbar = () => {

    // const [model,setModle] = useState(false);

    const { modelFunction, sliderFunction} = useContext(globalValue)

    // const modelFunction = ()=>{
    //     setModle(true)
    // }

    return (
        <>
            <div className="container-main  nav_main">
                <div className="row bg-primary nav_row">
                    <div className="col-sm-4 col-lg-2 col-md-3 d-flex text-white logo">
                        <h3 id='heading_logo'>Local<span className='text-warning'>Sewa</span></h3>
                        <h2 className=''> <fsPerson className='d-lg-none d-sm-block '
                            onClick={sliderFunction}
                        /></h2>

                    </div>

                    {/* <div className="col-2"> */}

                    {/* </div> */}
                    <div className="col-12 col-sm-12 col-lg-6 col-md-3">
                        <div className="row input_sec">
                            <div className="col-9 search_item" >
                                <input type="text" className=' ' placeholder='search your requiard services' />
                                <span><FaSearch /></span>
                            </div>
                            <div className="col-3 area_inp">
                                <input type="text" className=' search_area' placeholder='enter service area' />
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4 d-flex login_section">
                        <div className="login me-3">
                            {/* <h5>User Login</h5> */}
                            {/* <Link to=''> */}
                            <h2><FaSignInAlt className='user_icon'
                                onClick={modelFunction}
                            /></h2>


                            {/* </Link> */}


                        </div>
                        <div className="mer_login">
                            <h5>Become Merchant</h5>
                            {/* <FaRegUserCircle className='user_icon' /> */}
                        </div>

                    </div>
                </div>

                <div className="row sub_navbar">
                    <div className="col-lg-4 category_list">
                        <select name="" id="">
                            <option value="" >All Categories</option>
                            <option value="">Electronics</option>
                            <option value="">Construction</option>
                            <option value="">Man Power</option>
                            <option value="">Carpenter</option>
                            <option value="">Plumber</option>
                            <option value="">Black Smith</option>
                            <option value="">Washerman</option>
                            <option value="">Home Coocking</option>
                        </select>
                    </div>
                    <div className="col-lg-8 d-flex">
                        <h6>Trending Services</h6>
                        <ul className='d-flex'>
                            <li className='mx-4'>Electronic</li>
                            <li className='mx-4'>Home Painting</li>
                            <li className='mx-4'>Furniture</li>
                            <li className='mx-4'>Home Clining</li>
                            <li className='mx-4'>Constructor Work</li>
                        </ul>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Navbar