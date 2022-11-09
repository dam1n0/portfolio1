import React from "react";
import { NavLink } from "react-router-dom";
import cssm from "./SiteBar.module.css"



const SiteBar = (props:any) =>{

    return(
        <nav className={cssm.bar} >
            <div className={cssm.toggleTheme}>Light <input type="checkbox" onChange={()=>props.changeTheme()}
                           className={cssm.toggleButton} checked={props.themeMode==="dark"}/> Dark</div>
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