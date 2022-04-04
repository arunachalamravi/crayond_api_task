import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

function Func() {
    const [gtgt, setgtgt] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res.data)
                // this.setState({
                //     gtgt: res.data
                // })
                setgtgt(
                    res.data
                )
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const add = () => {

    }
    return (
        <section className='listtag'>
            <Link>
                {
                    gtgt && gtgt.map((e) => {
                        console.log(e);
                        return (

                            <div className='flipcard'>
                                <div className='flipk'>
                                    <Grid container spacing={3} columns={8}>
                                        <Grid item lg={12}>
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

                                                    </div>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    </Grid>

                                </div>
                            </div>

                        )

                    })
                }
            </Link>
            {/* {
                gtgt && gtgt.map((e) => {
                    console.log(e);
                    return (

                        <div className='flipcard'>
                            <div className='flipk'>
                                <Grid container spacing={3} columns={8}>
                                    <Grid item lg={12}>
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

                                                </div>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </Grid>

                            </div>
                        </div>

                    )

                })
            } */}

        </section>
    )
}

export default Func