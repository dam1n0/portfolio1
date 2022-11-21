import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useCookies } from "react-cookie";
import SiteBar from './modules/SiteBar/SiteBar';
import Games from "./modules/Games/Games";
import CryptoContainer from "./modules/CryptoContainer/CryptoContainer";
import Profile2 from "./modules/Profile/Profile2";

function App() {
    const [cookies, setCookie] = useCookies(["theme"])
    const [themeMode, setMode] = useState(cookies.theme?cookies.theme:"light");

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
            <div className={`wrapper scroll ${themeMode}`}>
                <SiteBar changeTheme={changeTheme} themeMode={themeMode}/>
                <Routes>
                    {/*< Route path='/profile' element={<Profile theme={themeMode}/>}/>*/}
                    < Route path='/' element={<Profile2/>}/>
                    < Route path='/ctypto' element={<CryptoContainer theme={themeMode}/>}/>
                    < Route path='/games' element={<Games />}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
