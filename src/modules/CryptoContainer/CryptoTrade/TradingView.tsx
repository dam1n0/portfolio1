import {AdvancedRealTimeChart} from "react-ts-tradingview-widgets";
import React from "react";
import cssm from "./TradingView.module.css";
import CryptoTrade from "./CryptoTrade";

type propsType = {
    theme:"light" | "dark"
}

const TradingView = (props:propsType) => {


    return (
        <div className={cssm.main}>
            <div className={cssm.chart}>
                <AdvancedRealTimeChart theme={props.theme} autosize symbol="KRAKEN:BTCUSDT"></AdvancedRealTimeChart>
            </div>
            <CryptoTrade/>
        </div>
    )
}
export default TradingView
//https://tradingview-widgets.jorrinkievit.xyz/docs/components/AdvancedRealTimeChartWidget/#private-types