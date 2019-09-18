import React, { Component } from 'react';
import './repo-arch-part2.css'
export default function RepoPart2()
{
    return(
        <div>
                    <p>Store Online</p>
                    <h3>Daily Report</h3>
                    <p>Saturday,May November 24,2019</p>
                    <hr/>


                     <div className="archive-revenue">
                            <p>Revenue</p>
            
                     </div>

                     <hr/>


                    <div className="orders">
                            <p>Orders</p>
                     </div>
                    <hr/>


                    <div className="pageviews">
                            <p>Pageviews</p>
                    </div>

                    <hr/>

                    <div className="popular-product">
                            <p>Popular Products</p>
                                    <div className="best-yesteday">
                                            <p>Best Sellers(yesteday)</p>
                                            <li>tablet</li>
                                            <li>phone</li>
                                            <li>laptop</li>
                                    </div>

                                    <div className="best-month">
                                            <p>Best Sellers(last month)</p>
                                            <li>pen</li>
                                            <li>pencil</li>
                                            <li>Houston Travel wallet</li>
                                            </div>
            
                                    </div>
                     </div>
    )
}