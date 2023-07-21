import React from 'react'
import './Style.css';
import img1 from './assest/images/clot1.webp'
import itemList from './CardItemList'

import { BsStarFill, BsStarHalf } from 'react-icons/bs'
const Card = () => {

    return (
        <>
            <div className="container card_container">
                <div className="row ">


                    {itemList.map((item, index) => {
                        return (
                            <div className="col-6 col-lg-3 my-3">
                                <div className="card" style={{ width: "" }}>
                                    <img src={img1} className="img-fluid card-img" alt="..." style={{ height: "y" }} />
                                    <div className="card-body card-main">
                                        <h5 className="card-title text-size">{item.proverName}</h5>
                                        <h6 className='text-size'><span className='text-success '>Provide By:</span> Vishwkarma home sevices limited</h6>
                                        <h6 className='text-size'><span className='text-success text-size'>Sevices:</span> Home Warring,All electronic repairing, Cooler ,frezee,tv,lcd so more... <span className='text-info'>know more</span></h6>
                                        <h6>
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarHalf />
                                        </h6>
                                        <div className="action-btn">
                                            <button className='btn btn-primary me-2'>Book Now</button>
                                            <button className='btn btn-primary'>Go More</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>

    )
}

export default Card