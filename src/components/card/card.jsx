import React, { Component } from 'react'

import './card.css'
import img from "../../images/s.png";
import img1 from "../../images/Profile.ai";

export default function Card(props) {
    return (
            <div className="card-style">
               <p style={{letterSpacing:'.1vw'}}>{props.heading}</p>
                   <div className="card-align">
                      <img className="timer-img" src={img} alt=""/>
                          <div className="time">
                             <p>time</p> 
                             <img src={img1} alt=""/>
                          </div>
                     </div>
             </div>
    )
  }
