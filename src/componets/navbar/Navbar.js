import React from 'react'
import { FaOutdent, FaSearch, FaRegUserCircle,FaSignInAlt } from 'react-icons/fa'
// import { FaMagnifyingGlass } from 'react-icons/Fa6'

import './navbarstyle.css';
const Navbar = () => {
    return (
        <>
            <div className="container-main  nav_main">
                <div className="row bg-primary nav_row">
                    <div className="col-sm-4 col-lg-2 text-white">
                        <h3 id='heading_logo'>Local<span className='text-warning'>Sewa</span></h3>
                    </div>

                    <div className="col-sm-8 col-lg-6  " >
                        <div className="row ">
                            <div className="col-6 search_item ms-5" >
                                <input type="text" className=' ' placeholder='search your requiard services' />
                                <span><FaSearch /></span>
                            </div>
                            <div className="col-4 area_inp">
                                <input type="text" className=' search_area' placeholder='enter service area' />
                            </div>
                            <div className="col-2">
                                {/* <FaOutdent className='d-lg-none d-sm-block ms-5' /> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 d-flex login_section">
                        <div className="login me-3">
                            {/* <h5>User Login</h5> */}
                            <FaSignInAlt className='user_icon' />

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