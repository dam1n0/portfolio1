import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./modules/Profile/Profile";
import SiteBar from './modules/SiteBar/SiteBar';
import Cryptocurrency from "./modules/Cryptocurrency/Cryptocurrency";
import CryptoTrade from "./modules/CryptoTrade/CryptoTrade";
import Games from "./modules/Games/Games";

function App() {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <SiteBar/>
                <Routes>
                    < Route path='/' element={<Profile/>}/>
                    < Route path='/ctypto' element={<Cryptocurrency/>}/>
                    < Route path='/trade' element={<CryptoTrade/>}/>
                    < Route path='/games' element={<Games/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
