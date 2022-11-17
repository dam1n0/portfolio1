import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import cssm from "./SiteBar.module.css"



const SiteBar = (props:any) =>{
    const [openMenu, setOpenMenu] = useState(false);

    return(
        <>
            <div onClick={e =>setOpenMenu(!openMenu)} className={`${cssm.menuBtn} ${openMenu?cssm.active:''}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        <nav onClick={e =>setOpenMenu(!openMenu)} className={`${cssm.menu} ${openMenu?cssm.active:''}`} >
            <div className={cssm.toggleTheme}>Theme <input type="checkbox" onChange={()=>props.changeTheme()}
                           className={cssm.toggleButton} checked={props.themeMode==="dark"}/></div>
            <ul>
                <li><NavLink to='/profile' className={({ isActive }) => (isActive ? cssm.activeLink : "")} >Profile</NavLink></li>
                <li><NavLink to='/ctypto' className={({ isActive }) => (isActive ? cssm.activeLink : "")} >Crypto</NavLink></li>
                <li><NavLink to='/games' className={({ isActive }) => (isActive ? cssm.activeLink : "")} >Games</NavLink></li>

            </ul>
        </nav>
        </>
    )
}

export default SiteBar