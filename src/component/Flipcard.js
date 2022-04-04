import React, { Component } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export class Flipcard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gtgt: [],
            addvalue: 0

        }
    }
    add = () => {
        this.setState({
            addvalue: this.state.addvalue + 1
        })
    }
    componentDidMount = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res.data)
                this.setState({
                    gtgt: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <section className='listtag'>
                {
                    this.state.gtgt && this.state.gtgt.map((e) => {
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
                                                        {e.price}toadd {this.state.addvalue}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions class="text-center">
                                                    <div class="btnadd">

                                                        {/* <Btn name="add to cart" clic={this.add}></Btn> */}
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

            </section>
        )
    }
}

export default Flipcard