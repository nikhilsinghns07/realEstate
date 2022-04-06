import React from 'react'
import classes from './style.module.css'
import building from '../pics/pic1.jpg'
import apt from '../pics/3.jpg'

const Home = () => {
    return (
        <React.Fragment>
            <div className={classes.card}> 
                <h3 className={classes.h3}> Welcome to Estate pvt. ltd.</h3>
            </div>

            <img src={building} className={classes.building} alt='buildng'></img>

            <div className={classes.why}>
                <span className={classes.why1}> "We are all biochemically unique." </span> <br/> 
                    "Buying or selling your home should be,too." <br/>
            </div>        
            
            <div className={classes.centered}>
                <img src={apt} align="left" className={classes.building2} alt='building'></img>

                <h4 className={classes.abouthead}>Bringing Wellness to real Estate</h4>
                
                <p className={classes.aboutp}>
                    We aim to bridge the gap between Real Estate and Wellness for my buyers and sellers in San Francisco and Marin. My background in 
                    Nutrition,Functional Medicine has taught me there are many underlying similarities. Identifying the root cause or goal is 
                    the way to move forward successfully. I help my clients to identify their underlying goals for buying or selling, and diligently 
                    manage the process from start to finish, so you can remain clear-headed, healthy, and well.</p>
            </div>

            
        </React.Fragment>
    )
}

export default Home