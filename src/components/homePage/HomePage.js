import React, { Component } from 'react'
import './HomePage.css'
import {Link} from "react-router-dom"

export default class HomePage extends Component {
    render() {
        return (
            <div className = "container-fluid pt-5 align-items-center "> 
            <div className= " col-md-8 pt-5 offset-md-2">
                <h2> Hello there, </h2>
                   <p className="glitch"><span aria-hidden="true">I am  Olamiji Badmos </span> I am Olamiji Badmos, a front-end developer </p>
                  
                   <Link to ="/projects"><button type="submit" className="button" >See Projects <i className="fas fa-arrow-right "></i></button></Link>
                   <br/>
                   <Link to ="/cv/BADMOSOLAMIJI CV.pdf" target="_blank" download><button type="submit" className="button" id="cv" >Download CV <i className="fas fa-download "></i></button></Link>
                 <br/>
                 <br/>
                    <ul className = "nav ">
                    <a target="_blank" rel="noreferrer" href="https://github.com/thebadmos/"><li className="card-text nav-item pl-2"> GitHub<i className="fab fa-fw fa-github"></i></li></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/olamijibadmos/"><li className="card-text nav-item pl-2"> LinkedIn<i className="fab fa-fw fa-linkedin" ></i></li></a>
                    <a target="_blank" rel="noreferrer" href="mailto:badmosolamiji@gmail.com"><li className="card-text nav-item pl-2"> Gmail<i className="far fa-fw fa-envelope"></i></li></a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/mijiblac_"><li className="card-text nav-item pl-2"> Twitter<i className="fab fa-fw fa-twitter"></i></li></a>
                    <a target="_blank" rel="noreferrer" href="https://medium.com/@thebadmos"><li className="card-text nav-item pl-2"> Medium<i className="fab fa-fw fa-medium"></i></li></a>
             
                    </ul>
            </div>
            </div>
        )
    }
}
