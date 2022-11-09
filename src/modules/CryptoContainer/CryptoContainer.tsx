import React from "react";
import cssm from "./CtyptoContainer.module.css";
import Cryptocurrency from "../Cryptocurrency/Cryptocurrency";
import TradingView from "../CryptoTrade/TradingView";

const CryptoContainer:React.FC = ()=>{


    return(

        <div className={cssm.main}>
            < Cryptocurrency />
            < TradingView />
        </div>
    )
}
export default CryptoContainer