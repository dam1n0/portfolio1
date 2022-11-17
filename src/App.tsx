import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useCookies } from "react-cookie";
import Profile from "./modules/Profile/Profile";
import SiteBar from './modules/SiteBar/SiteBar';
import Games from "./modules/Games/Games";
import CryptoContainer from "./modules/CryptoContainer/CryptoContainer";

function App() {
    const [cookies, setCookie] = useCookies(["theme"])
    const [themeMode, setMode] = useState(cookies.theme?cookies.theme:"dark");

    function changeTheme (){
        if(themeMode === "dark"){
            setMode("light");
            setCookie("theme", "light",{path:"/"})
        }
        else {
            setMode("dark");
            setCookie("theme", "dark",{path:"/"})
        }
    }

    return (
        <BrowserRouter>
            <div className={`wrapper ${themeMode}`}>
                <SiteBar changeTheme={changeTheme} themeMode={themeMode}/>
                <Routes>
                    < Route path='/profile' element={<Profile />}/>
                    < Route path='/ctypto' element={<CryptoContainer theme={themeMode}/>}/>
                    < Route path='/games' element={<Games />}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
