import React,{Component} from 'react'
import img from "../../images/s.png";
import money from "../../images/revenue.svg";

import Card from '../card/card'
import Form from '../form/form'


import './home.css'
class Home extends Component {
    state = {  }
    render() { 
        return (
            <div>
                    <div className="home-align" >
           
                            <div className="box">

                                    <div className="first-box">
                                            <div className="board-icon">
                                                    <img className="report-img"  src={img} alt=""/>
                                             </div>
                                
                                             <div className="sent-rep">

                                                    <p>Reports sent</p>
                                                    <p>29</p>
                                                    <p>last 30 days</p>
                                              </div>
                                    </div>

                            </div>

                            <Card heading="Next daily report in"/>
                            <Card heading="Next weekly report in"/>  
                    </div>

                    <div className="home-2nd-section">
                            <div className="revenue">
                                    <p>Revenue today</p>
                                    <img id="revenue-img" src={money} alt=""/>
                                    <p>$99</p>
                             </div>

             
                             <div className="sales">
                                    <div className="sales-part1">
                                            <p style={{padding:1.5 +"vw"}}>Sales (Last 30 days)</p>
              

                                     </div>

                                     <div className="sales-part2">
                                            <button className="btn" >Last 30 days</button>
                                            <button >Last 12 months</button>

                                    </div>
                            </div>
                      </div>
             <Form/>
 
            

            </div>

          );
    }
}
 
export default Home;