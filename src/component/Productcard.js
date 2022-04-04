import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'

function Productcard() {

    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                // console.log(res)
                setProduct(res.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])


    return (
        <div>

            <section className='listtag'>
                <Box
                    sx={{
                        display: 'grid',
                        gap: 3,
                        gridTemplateColumns: 'repeat(4, 1fr)',
                    }}
                >
                    {
                        product && product.map((e, index) => {
                            let f = e.id

                            console.log(e)
                            return (
                                <>
                                    <Link to={`productlist/${f}`}>

                                        <div className='flipcard' key={index}>
                                            <div className='flipk'>

                                                <Card sx={{ maxWidth: 345 }}>
                                                    <CardMedia class="crdimg"
                                                        component="img"
                                                        alt="green iguana"
                                                        height="140"
                                                        image={e.image}

                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {e.category}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {e.price}

                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions class="text-center">
                                                        <div class="btnadd">

                                                            <Link to={'/tr'}>
                                                                <Button variant="contained">ADD tO CART</Button>
                                                            </Link>

                                                        </div>
                                                    </CardActions>
                                                </Card>


                                            </div>
                                        </div>

                                    </Link>
                                </>


                            )
                        })
                    }









                </Box>
            </section>

        </div >
    )
}

export default Productcard