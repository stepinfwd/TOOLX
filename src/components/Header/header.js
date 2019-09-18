import React from 'react'
import './header.css'
import {Link} from 'react-router-dom';  

export default class Header extends React.Component{
    render(){
        return(
                                 
            <div>
                <nav class="navbar navbar-expand-lg  navbar-light">
                <a class="navbar-brand" href="index.html">LOGO</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
      
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav  ml-lg-auto ">
                            <Link to="/">
                            <li class="nav-item active">
                                <a class="nav-link" href="index.html">HOME <span class="sr-only">(current)</span></a>
                            </li>
                            </Link>

                            <Link to="/report">
                            <li class="nav-item">
                                <a class="nav-link" href="#">REPORT SETTING</a>
                            </li>
                            </Link>

                            <Link to="/archive">
                            <li class="nav-item">
                                <a class="nav-link" href="#">REPORT ARCHIVE</a>
                            </li>
                            </Link>
                        

                            <Link to="/profile">
                            <li class="nav-item">
                                <a class="nav-link " href="#">PROFILE</a>
                            </li>
                            </Link>
                        </ul>
         
                     </div>
                 </nav>
            </div>
        )

    }
}