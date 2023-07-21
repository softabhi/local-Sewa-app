import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <>
            <div className="container-main">
                <div className="row bg-success" style={{  }}>
                    <div className="col-sm-12 subscribe">
                        {/* <div className=''> */}
                        <h2><span>Subscribe</span> Us For Latest Services Updates</h2>
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
                        <h3 id='heading_logo' className='mt-5 footer_logo'>Local<span className='text-warning'>Sewa</span></h3>
                    </div>
                    <div className="col-sm-12 col-lg-2  footer_elem" >
                        <h5>Our Services</h5>
                        <ul>
                            <li>Home Services</li>
                            <li>Professional Work</li>
                            <li>Educationa</li>
                            <li>Construction</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-2  footer_elem" >
                        <h5>Know Us</h5>
                        <ul>
                            <li>Home Services</li>
                            <li>Professional Work</li>
                            <li>Educationa</li>
                            <li>Construction</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-2  footer_elem" >
                        <h5>Contact Us</h5>
                        <ul>
                            <li>Home Services</li>
                            <li>Professional Work</li>
                            <li>Educationa</li>
                            <li>Construction</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-2  footer_elem" >
                        <h5>Others Links</h5>
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