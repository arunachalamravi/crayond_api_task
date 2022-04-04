import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Route, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios'

function Productlist() {
    const [count, setCount] = useState("");
    let { id } = useParams();
    console.log(id, 'sadfa')
    const [productdetail, setproductDetail] = useState([]);
    useEffect(() => {

        axios.get('https://fakestoreapi.com/products')
            .then((na) => {
                console.log(na.data)
                let a = na.data.filter((e) => (e.id) == id)
                console.log(a[0])
                setproductDetail(a[0])
            })
            .catch((error_api) => {
                console.log(error_api)
            })

    }, [])


    return (
        <div>
            <section className='p-listt'>

                <div className='detaillist listt'>


                    <div>
                        <div className='product-img'>
                            <img src={productdetail && productdetail.image}></img>
                        </div>
                    </div>



                    <div className='product-card'>
                        <div className='stocklist'>
                            {/* <h6 className={`${productdetails && productdetails.rating.count === 'in stock' ? 'lightgreen' : 'lightred'}`}>{productdetails && productdetails.rating.count}</h6> */}
                        </div>
                        <div className="sale">
                            <h6 className='salehead'>{productdetail && productdetail.id}</h6>
                        </div>
                        <h3 className='headtitle'>{productdetail && productdetail.title}</h3>
                        <div className='stars' style={{ color: 'rgb(250, 175, 0)' }}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                        </div>
                        <div className='price'>
                            <h6>{productdetail && productdetail.price}</h6>
                        </div>
                        <div className='colors'>

                        </div>

                        <div className='twobtn'>


                            <Button variant="contained" className="buynow">Buy Now</Button>
                        </div>
                    </div>


                </div >

            </section >
        </div>
    )
}

export default Productlist