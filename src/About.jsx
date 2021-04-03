import React from 'react';
//import { NavLink } from 'react-router-dom';
import web from "../src/images/rocket.gif"
import Common from './Common';


const About=()=>{

    return(
        <>
       <Common name="welcome to about page"
        imgsrc={web} 
        visit="/contact"
         btname="contact now" 

         />
         </>
    );
};
export default About;