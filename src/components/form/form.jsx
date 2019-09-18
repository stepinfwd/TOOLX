import React, { Component } from 'react';
import Header from '../Header/header'
import './form.css'

 export default function Form()
{
return(
    <div>
        <Header/>
            <div className="wrapper">
                <form>
                <label>
                <p style={{fontWeight:500 ,marginTop:2 +"vw"}}> Which email should we sent the report to?</p>
  
                <input style={{width:600,paddingLeft:1.5 +"vw"}} type="text" name="name" value="david.andres@gmail.com" />


                <p style={{fontWeight:500 ,marginTop:1 +"vw"}}> Daily reports</p>

                <input style={{width:600}} type="text" name="name" value="08:00 AM" />


                <p style={{fontWeight:500 ,marginTop:1 +"vw"}}> Weekly reports</p>

                <input style={{width:250,marginLeft:-5 +"vw"}} type="text" name="name" value="Day" />
                <input style={{width:250,marginLeft:2 +"vw"}} type="text" name="name" value="Time" />
    


                <p style={{fontWeight:500 ,marginTop:1 +"vw"}}> Time zone</p>

                <input style={{width:600}} type="text" name="name" value="US/Central" />


                <p style={{fontWeight:500,marginTop:1 +"vw"}}> Monthly reports sent at</p>

                <input style={{width:600}} type="text" name="name" value="Time" />
                <br/>
                <button  className="save-button" style={{fontSize:.8 +"vw",marginTop:1 +"vw",color:'white',backgroundColor:'green',fontWeight:700}} >SAVE CHANGES</button>
               </label>
               </form>
  
          </div>
  </div>

)
}