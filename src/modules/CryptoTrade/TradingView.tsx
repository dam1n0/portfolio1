import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import React from "react";
import cssm from "./TradingView.module.css";
import CryptoTrade from "./CryptoTrade";

const TradingView: React.FC = ()=>{


    return(<div className={cssm.main}>
        <AdvancedRealTimeChart theme="dark" autosize symbol="KRAKEN:BTCUSDT" ></AdvancedRealTimeChart>
        <CryptoTrade/>
    </div>)
}
export default TradingView
//https://tradingview-widgets.jorrinkievit.xyz/docs/components/AdvancedRealTimeChartWidget/#private-types