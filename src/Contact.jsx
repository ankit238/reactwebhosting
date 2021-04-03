import { useState } from "react";
import React from 'react';

const Contact=()=>{
    const[data,setdata]=useState({
        fullname:" ",
        phone:" ",
        email:" ",
        //msg:" ",
    });
    const InputEvent=(event)=>{
        const{name,value}=event.target;
        setdata((preval)=>{
           return{
            ...preval,
            [name]:value,
           };
        });
    };

    const formSub=(e)=>{
        e.preventDefault();
        alert(
            `my name is ${data.fullname}.My mobile number is ${data.phone}.my email is ${data.email}`
        );


    };


    return(
        <>
        <div className="my-5">
            <h1 className="text-center"> Contact Us</h1>

        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto"></div>
                <form onSubmit={formSub}>
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  FullName</label>
  <input type="text" class="form-control"
   id="exampleFormControlInput1"
  name="fullname"
  value={data.name}
  onChange={InputEvent}
   placeholder="enter your name" />
</div>

             <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  phone number</label>
  <input type="number" class="form-control"
   id="exampleFormControlInput1"
  name="phone"
  value={data.phone}
  onChange={InputEvent}
   placeholder="enter your number" />
</div>


                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  Email address</label>
  <input type="email" class="form-control"
   id="exampleFormControlInput1"
  name="email"
  value={data.email}
  onChange={InputEvent}
   placeholder="name@example.com" />
</div>

{/*<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">
  Message</label>
  <textarea class="form-control"
   id="exampleFormControlTextarea1" rows="3">
  name="msg"
  value={data.msg}
  onChange={InputEvent}

   </textarea>
</div>*/}

<div class="col-12">
<button class="btn btn-outline-primary"
 type="submit">submit form </button>
</div>

                </form>
            </div>
        </div>
       
        </>
    );
};
export default Contact;