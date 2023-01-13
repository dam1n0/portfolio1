import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import cssm from "./SiteBar.module.css"
import { IoSunnySharp, IoMoon } from "react-icons/io5";
import {BsGripHorizontal} from "react-icons/bs";

type propsType = {
    themeMode:"light" | "dark",
    changeTheme: ()=>void;
}

const SiteBar = (props: propsType) => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <div onClick={() => setOpenMenu(!openMenu)} className={`${cssm.menuBtn} ${openMenu ? cssm.active : ''}`}>
                <BsGripHorizontal/>
            </div>
            <nav onClick={() => setOpenMenu(!openMenu)} className={`${cssm.menu} ${openMenu ? cssm.active : ''}`}>
                <ul>
                    <li><NavLink to='/' end
                                 className={({isActive}) => (isActive ? cssm.activeLink : "")}>Profile</NavLink></li>

                    <li><NavLink to='/ctypto'
                                 className={({isActive}) => (isActive ? cssm.activeLink : "")}>Crypto</NavLink></li>
                    <li><NavLink to='/games'
                                 className={({isActive}) => (isActive ? cssm.activeLink : "")}>Games</NavLink></li>
                </ul>
                <div className={cssm.toggleTheme}><IoSunnySharp/> <input type="checkbox" onChange={() => props.changeTheme()}
                                                               className={cssm.toggleButton}
                                                               checked={props.themeMode === "dark"}/> <IoMoon/></div>
            </nav>
        </>
    )
}

export default SiteBar