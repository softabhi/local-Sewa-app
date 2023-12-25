import React from 'react'
import '../Style.css';
import './card.css'

import itemList from '../CardItemList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { BsStarFill, BsStarHalf, BsHeart, BsShare } from 'react-icons/bs'

const Card = () => {

    return (
        <>
            <div className="container card_container">
                <div className="row ">


                    {itemList.map((item, index) => {
                        return (
                            <div key={index} className="col-6 col-lg-3 mt-3">
                                <div className="card p-2" style={{ width: "" }}>
                                    <div className='top_heading'>
                                        <h5 className="card-title text-size">{item.proverName} </h5>
                                        <BsHeart id='heart'/>
                                        <BsShare id='share'/>
                                    </div>


                                    <img src={item.img} className="img-fluid card-img" alt="..." style={{ height: "y" }} />
                                    <div className="card-body card-main">

                                        <h6 className='text-size'><span className='text-success '>Provide By:</span> Vishwkarma home sevices limited</h6>
                                        <h6 className='text-size'><span className='text-success text-size'>Sevices:</span> Home Warring,All electronic repairing, Cooler ,frezee,tv,lcd so more... <span className='text-info'>know more</span></h6>
                                        <h6 id='rating'>
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarHalf />
                                        </h6>
                                        <div className="action-btn">
                                            <button className='btn btn-primary me-2'>Book Now</button>
                                            {/* <button className='btn btn-primary'>Go More</button> */}
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