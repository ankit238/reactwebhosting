import React from 'react';
import web from "../src/images/rocket.gif"
import Common from './Common'

const Home=()=>{

    return(
        <>
      <Common 
       name="grow your business with"
        imgsrc={web} 
        visit="/service"
         btname="get started"
          />
        </>
    );
};
export default Home;