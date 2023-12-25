import React from 'react'
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { FaTwitter,FaFacebookF,FaInstagram,FaYoutube,FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className="container-main mt-3">
                <div className="row bg-success" style={{  }}>
                    <div className="col-sm-12 subscribe">
                        {/* <div className=''> */}
                        <h2>Subscribe <span>Us For Latest Services Updates</span> </h2>
                        <div className='inp_box'>
                            
                            <input className='' type="text" />
                            <button>Submit</button>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                <div className="row" style={{  background: "#002147", textAlign: "center", color: "white" }}>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2 col-sm-1" >
                        <h4 id='' className='mt-5 footer_logo'>Local<span className='text-warning'>Sewa</span></h4>
                       <FaTwitter id='twt'/>
                       <FaFacebookF id='fac'/>
                       <FaSquareInstagram id='inst'/>
                       <FaYoutube id='yut'/>
                    </div>
                    <div className="col-sm-12 col-lg-2  footer_elem" >
                        <h4 className='footer_head'>Our Services</h4>
                        <ul>
                            <li>Home Services</li>
                            <li>Professional Work</li>
                            <li>Educationa</li>
                            <li>Construction</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-2  footer_elem" >
                        <h4 className='footer_head'>Know Us</h4>
                        <ul>
                            <li>Home Services</li>
                            <li>Professional Work</li>
                            <li>Educationa</li>
                            <li>Construction</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-2  footer_elem" >
                        <h4 className='footer_head'>Contact Us</h4>
                        <ul>
                            <li>Home Services</li>
                            <li>Professional Work</li>
                            <li>Educationa</li>
                            <li>Construction</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-2  footer_elem" >
                        <h4 className='footer_head'>Others Links</h4>
                        <ul>
                            <li>Home Services</li>
                            <li>Professional Work</li>
                            <li>Educationa</li>
                            <li>Construction</li>
                        </ul>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        </>
    )
}

export default Footer