import React from 'react'
import classes from './style.module.css'
import building from '../pics/pic1.png'
import {Carousel,Card} from 'react-bootstrap'

import b1 from '../pics/b1.jpg'
import b2 from '../pics/b2.jpg'
import b3 from '../pics/b3.png'


const Home = () => {
    return (
        <React.Fragment>
            <div className={classes.intro}>
                <img src={building} className={classes.building} alt='buildng'></img>       
            </div>

            <Carousel fade className={classes.carousel}>
                <Carousel.Item>
                    <img className="d-block w-100" src={b1} height={650} alt="First slide"/> 
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={b2}  height={650} alt="First slide"/> 
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={b3}  height={650}  alt="First slide"/> 
                </Carousel.Item>
            </Carousel>

                <Card className={classes.card}>
                    <Card.Header>Blended with luxury and affordability</Card.Header>
                    <Card.Body >
                        In 5 years Under the leadership of Mr Nikhil Singh we have became top rated and most trusted real Estate in Patna with a
                        wide range of portfolio like Office,Resedential Apartments,Commercial Complex and more to come yet.
                        With RERA approved we trust in building with ecology and luxury blended with affordability.
                        Being a premier privately-owned real estate company in Patna, we are able to operate with freedom
                        and flexibility, and duly ensure that we meet our delivery timelines, every single time.
                    </Card.Body>
                </Card>
            

            {/* <div className={classes.centered}>
                <img src={apt} align="left" className={classes.building2} alt='building'></img>

                <h4 className={classes.abouthead}>Bringing Wellness to real Estate</h4>
                
                <p className={classes.aboutp}>
                    We aim to bridge the gap between Real Estate and Wellness for my buyers and sellers in San Francisco and Marin. My background in 
                    Nutrition,Functional Medicine has taught me there are many underlying similarities. Identifying the root cause or goal is 
                    the way to move forward successfully. I help my clients to identify their underlying goals for buying or selling, and diligently 
                    manage the process from start to finish, so you can remain clear-headed, healthy, and well.</p>
            </div> */}

            
        </React.Fragment>
    )
}

export default Home