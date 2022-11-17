import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {closeTradeWs, openTradeWs} from "../../../API/TradeApi";
import {clearState, getTradeAPI, initialStateItemType} from "../../../redux/Trade-reducer";
import cssm from "./CryptoTrade.module.css";
import loadingGif from "../../../contentFiles/loadingCandle.gif";

const CryptoTrade: React.FC = () => {
    const tradeState = useAppSelector((state) => state.Trade);
    const dispatch = useAppDispatch();

    useEffect(() => {
        openTradeWs();
        dispatch(getTradeAPI());
        return () => {
            dispatch(clearState());
            closeTradeWs();
        }
    }, []);


    return (<div className={cssm.main}>
            <div className={cssm.ask}>
                <h3>ASK</h3>
                <ul className={cssm.line}>
                    <li className={cssm.span}>Price </li>
                    <li className={cssm.span}>Value</li>
                    <li className={cssm.span}>Time</li>
                </ul>
                <div className={cssm.scroll}>
                {(Object.keys(tradeState.as).length === 0)?<img className={cssm.loading} src={loadingGif} alt="LOADING" />:null}
                {Object.keys(tradeState.as).sort().map((price: string) => (
                    <ul className={cssm.line} key={price}>
                        <li className={cssm.span}>{(+price/100000).toFixed(4)} </li>
                        <li className={cssm.span}>{tradeState.as[price as keyof initialStateItemType][0]}</li>
                        <li className={cssm.span}>{new Date(+tradeState.as[price as keyof initialStateItemType][1]*1000).toLocaleTimeString()}</li>
                    </ul>
                ))}
            </div>
            </div>
            <div className={cssm.bid}>
                <h3>BID</h3>
                <ul className={cssm.line}>
                    <li className={cssm.span}>Price</li>
                    <li className={cssm.span}>Value</li>
                    <li className={cssm.span}>Time</li>
                </ul>
                <div className={cssm.scroll}>
                    {(Object.keys(tradeState.bs).length === 0) ?
                        <img className={cssm.loading} src={loadingGif} alt="LOADING"/> : null}
                    {Object.keys(tradeState.bs).sort((a, b) => { // @ts-ignore
                        return b - a
                    }).map((price: string) => (
                        <ul className={cssm.line} key={price}>
                            <li className={cssm.span}>{(+price / 100000).toFixed(4)} </li>
                            <li className={cssm.span}>{tradeState.bs[price as keyof initialStateItemType][0]} </li>
                            <li className={cssm.span}>{new Date(+tradeState.bs[price as keyof initialStateItemType][1] * 1000).toLocaleTimeString()}</li>
                        </ul>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default CryptoTrade