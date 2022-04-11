import React from 'react'
import { useState } from "react"
import axios from 'axios'
import { FaGithub, FaLinkedin} from "react-icons/fa"
import { ExternalLink } from 'react-external-link';
import classes from './style.module.css'
import {TextField} from '@mui/material'

const Footer = () => {
    const [enteredName , setEnteredName] = useState('')
    const [enteredMessage , setEnteredMessage] = useState('')
    const [emailSent,setEmailSent] = useState(false)

    const nameHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const messageHandler = (event) => {
        setEnteredMessage(event.target.value)
    }

    const submitHandler = async(event) => {
        try{
            await axios.post("/send",{
                name : enteredName,
                message : enteredMessage
            }).then(res=>{
                setEmailSent(true)
            })
        }catch(error){
        }
        setEnteredName('')
        setEnteredMessage('')
    }
    
    return (
        <React.Fragment>
            <footer className={classes.footer}>
                <span className={classes.intro}>Contact Details <br/><span className={classes.icons}>  
                    <ExternalLink href="https://www.linkedin.com/in/nikhilsinghns07/"> <FaLinkedin/> </ExternalLink>
                    <ExternalLink href="https://github.com/nikhilsinghns07" > <FaGithub /> </ExternalLink> 
                </span></span> 
                
                <form  className={classes.form} onSubmit={submitHandler} >
                        <span className={classes.emailSent}>{emailSent ? <p>Email Sent</p> : null }</span>
                        <div className={classes.control}>
                            <TextField id="filled-basic" label="Name" variant="filled" />
                        </div>

                        <div className={classes.control}>
                            <TextField id="filled-basic" label="Query" variant="filled" />
                        </div>

                        <div className={classes.control}>
                            <TextField id="filled-basic" label="Contact Details" variant="filled" />
                        </div>
                </form>
                    
            </footer>

        </React.Fragment>
        
    )
}

export default Footer