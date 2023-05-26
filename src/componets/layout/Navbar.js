import React from 'react'
import { FaOutdent } from 'react-icons/fa'
const Navbar = () => {
    return (
        <>
            <div className="container-fluid bg-primary">
                <div className="row d-lg-flex align-items-center">
                    <div className="col-12 col-lg-4  text-white">
                        <h3>Local<span className='text-warning'>Sewa</span></h3>
                    </div>

                    <div className="col-lg-8 mt-lg-2 " >
                        <div className="row ">
                            <div className="col-8 " >
                                <input type="text" className='mb-2 '/>
                            </div>
                            <div className="col-2">
                                <FaOutdent className='d-lg-none d-sm-block ms-5' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar