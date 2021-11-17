import React from 'react'
import "./Feature.css";
import { Grid, Paper } from '@mui/material';
import logo from '../static/NeverLate-logos.jpeg';



export default function Feature(){

    
    return(
    <>
   
    <img src={logo} alt="" className="logo1" />


    <Grid  sx={{padding:"7% 8%"}}  container spacing={8}  >
        <Grid item  md={4} >
            <Paper sx= {{textAlign: "center", padding:"5%", background:'#D8AED3'}}> 
                
                <h3 className ="feature-title">Easy to Start </h3>
                <p>Just connect with your BlackBoard account and the website will automatically update the assignment due day   </p>
             </Paper>
        </Grid>     
        <Grid item  md={4}>
            <Paper sx= {{textAlign: "center", padding:"5%", background:'#D8AED3'}}> 
                
                <h3 className ="feature-title">Good Reminder</h3>
                <p>The website will sent out email or phone message to remind you the due day of the assignment</p>
             </Paper>
        </Grid>      
        <Grid item  md={4}>
            <Paper sx= {{textAlign: "center", padding:"5%", background:'#D8AED3'}}> 
                
                <h3 className ="feature-title">User Friendly</h3>
                <p> The website interface is easy for the user to use </p>
             </Paper>
        </Grid>         
    </Grid>

  
    </>
    )
}