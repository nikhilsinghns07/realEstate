import React from "react"
import { NavLink } from "react-router-dom";
import Gallery from '../pics/2.jpg' 
import building from '../pics/4.jpg'
import classes from './style.module.css'
import Galxaxy from '../pics/1.png'
import concept from '../pics/concept.jpg'
import three from '../pics/3.jpg'

const Projects = () => {
    return(
        <React.Fragment>
            <h1 className={classes.heading}> Upcoming Projects </h1>
            <br/>

            <div>
                <h2 className={classes.projectshead}> The Building </h2>
                <img src={building} align="right" className={classes.estateImg} alt='building'></img>
                <p className={classes.process}>
                    <ul>
                        <li><b>Delivery : December 2021</b></li>
                        <li>3BHK , 2BHK</li>
                        <li>11 Floor Building ,Second Largest of your city.</li>
                        <li>Undergound Parking</li>
                        <li>XYZ Road</li>
                        <li>Conference Hall,Walking area,Swimming Pool,Gym,Playground.</li>
                        <li>Bookings Open.</li>
                    </ul>
                    For More details <NavLink to='/contact' activeClassName={classes.active}>
                    Contact US
                        </NavLink>
                </p>
            </div>
            <br/>

            <div>
                <h2 className={classes.projectshead}> The Concept </h2>
                <img src={concept} align="right"className={classes.concept} alt='building'></img>
                <p className={classes.detailsconcept}>
                    The Concept is our one of the most luxurious Project which we aim to deliver on June 2023.In this we aim 
                    to provide every flat as a presedential suite.
                    This building is in most posh area of your city XYZ.From connectivity point of view its just 30 mins to Airport
                    and 10 mins to Railway Station. <br/>
                    Other Facilities : <ul>
                        <li>24*7 Electricity with Automatic generators for Power Backup</li>
                        <li>River View.</li>
                        <li>Gym,Swimming Pool (spearate for Children and Adults), Playground for kids.</li>
                        <li>Conference Hall</li>
                        <li>Undergound Parking</li>
                        <li>Interiors of the Apartment should look like the Photo. </li>
                    </ul>
                    For more details.<NavLink to='/contact' activeClassName={classes.active}>
                    Contact US
                        </NavLink>
                </p>
            </div>

            <br/>
            
            <br/>
            <h1 className={classes.heading}> Projects Delivered </h1>
            <div>
                <h2 className={classes.projectshead}> The Galaxy </h2>
                <img src={Galxaxy} align="right" className={classes.estateImg} alt='building'></img>
                <p className={classes.process}>
                    <ul>
                        <li><b>Delivered : January 2021</b></li>
                        <li>3BHK , 2BHK</li>
                        <li>18 Floor Building,Biggest of your city.</li>
                        <li>10 floors for Resedential and Rest are for Offices. Top Floor is for residence</li>
                        <li>Undergound Parking</li>
                        <li>XYZ Road</li>
                        <li>Conference Hall,Walking area,Swimming Pool,Gym,Playground.</li>
                    </ul>
                    For renting office or residence <NavLink to='/contact' activeClassName={classes.active}>
                    Contact US
                        </NavLink>
                </p>
            </div>
            <br/>
            <div>
                <h2 className={classes.projectshead}> The Gallery </h2>
                <img src={Gallery} align="right" className={classes.estateImg} alt='building'></img>
                <p className={classes.process}>
                    <ul>
                        <li><b>Delivered : June 2020</b></li>
                        <li>3BHK , 2BHK</li>
                        <li>9 Floor Building </li>
                        <li>Spacious Parking</li>
                        <li>500m from XYZ Place</li>
                        <li>Conference Hall,Walking area,Swimming Pool,Gym,Playground.</li>
                    </ul>
                    For renting & leasing <NavLink to='/contact' activeClassName={classes.active}>
                    Contact US
                        </NavLink>
                </p>
            </div>

            <br/>
            <br/>
            <br/>
            <div>
                <h2 className={classes.projectshead}> The Magellanic Clouds. </h2>
                <img src={three} align="right" className={classes.concept} alt='building'></img>
                <p className={classes.process}>
                    <ul>
                        <li><b>Delivered : August 2019</b></li>
                        <li>3BHK,2BHK</li>
                        <li>10 Floor Building </li>
                        <li>Spacious Parking</li>
                        <li>Abc street xyz area.</li>
                        <li>Conference Hall,Walking area,Swimming Pool,Gym,Playground.</li>
                    </ul>
                    For renting & leasing <NavLink to='/contact' activeClassName={classes.active}>
                    Contact US
                        </NavLink>
                </p>
            </div>
     
        </React.Fragment>
    )
}

export default Projects 