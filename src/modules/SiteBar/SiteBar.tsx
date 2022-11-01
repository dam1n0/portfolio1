import React from "react";
import { NavLink } from "react-router-dom";
import cssm from "./SiteBar.module.css" //css modules

const SiteBar = () =>{

    return(
        <nav className={cssm.bar} >
            <ul>
                <li><NavLink to='/' className={({ isActive }) => (isActive ? cssm.activeLink : "")} >Profile</NavLink></li>
                <li><NavLink to='/ctypto' className={({ isActive }) => (isActive ? cssm.activeLink : "")} >Crypto</NavLink></li>
                <li><NavLink to='/trade' className={({ isActive }) => (isActive ? cssm.activeLink : "")} >Trade</NavLink></li>
                <li><NavLink to='/games' className={({ isActive }) => (isActive ? cssm.activeLink : "")} >Games</NavLink></li>

            </ul>
        </nav>
    )
}

export default SiteBar