import React from "react";
import cssm from "./CtyptoContainer.module.css";
import Cryptocurrency from "./Cryptocurrency/Cryptocurrency";
import TradingView from "./CryptoTrade/TradingView";

type propsType = {
    theme:"light" | "dark"
}

const CryptoContainer = (props:propsType)=>{


    return(

        <div className={cssm.main}>
            < Cryptocurrency />
            < TradingView theme={props.theme}/>
        </div>
    )
}
export default CryptoContainer