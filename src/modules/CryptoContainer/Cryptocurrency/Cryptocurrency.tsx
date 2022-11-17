import React, {useEffect} from "react";
import {closePriceWs, openPriceWs} from "../../../API/WebSocketApi";
import {useAppSelector, useAppDispatch} from "../../../hooks";
import {
    currencyType,
    getCryptoPriceAPI,
} from "../../../redux/Cryptocurrency-reducer";
import cssm from "./Cryptocurrency.module.css"
import CryptoPrice from "./CryptoPrice/CryptoPrice";

const Cryptocurrency: React.FC= () => {
    const cryptocurrency = useAppSelector((state)=> state.Cryptocurrency);
    const dispatch = useAppDispatch();


    useEffect(()=>{
        openPriceWs();
        dispatch(getCryptoPriceAPI());
        return ()=> {
            closePriceWs();
        }
    }, []);


    return (
                <div className={cssm.top}>
                    {Object.keys(cryptocurrency.currency).map(cryptoName => (
                        < CryptoPrice key={cryptoName} name={cryptoName}
                                      value={cryptocurrency.currency[cryptoName as keyof currencyType]}/>
                    ))}
                </div>
    )
}
export default Cryptocurrency

//https://docs.coincap.io/#ed9ed517-dd00-4d1d-98e4-772643117d9e
