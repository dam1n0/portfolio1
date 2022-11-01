import React, {useEffect, useRef, useState} from "react";
import cssm from "../Cryptocurrency.module.css";

type propsType = {
    name: string
    value:string | undefined
}
const CryptoPrice = (props: propsType) =>{

    const trend = useRef({oldPrice:"0", color:cssm.noChange});

    const getColor = (key:typeof trend, newPrice:string) =>{
        let color = cssm.noChange;
        if(newPrice){
            if (+key.current.oldPrice > +newPrice){color = cssm.down}
            else if (+key.current.oldPrice < +newPrice){color = cssm.height};
            key.current.color = color;
            key.current.oldPrice = newPrice;
        }
    }

    useEffect(()=>{
        if(props.value){
            getColor(trend, props.value)
        }
    },[props.value]);

    return(
        <p className={trend.current.color}>{props.name}: {trend.current.oldPrice}</p>
    )
}

export default CryptoPrice