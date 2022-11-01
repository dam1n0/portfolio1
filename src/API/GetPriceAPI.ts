import axios, {AxiosResponse} from 'axios';
import {currencyType} from "../redux/Cryptocurrency-reducer";


type subscriberType = (msg:string)=>void;

export const getFirstPrice = (currencies:currencyType, subscriber:subscriberType) => {

    Object.keys(currencies).map(cryptoName => {

        axios.get(`https://api.coincap.io/v2/assets/${cryptoName}`)
            .then((response: AxiosResponse) => {
                const priceUsd = +response.data.data.priceUsd;
                const price = priceUsd.toFixed(6)
                const payloadAC = JSON.stringify({[cryptoName]: price})

                subscriber(payloadAC);
            });
    })
}

/*
https://api.coincap.io/v2/assets/bitcoin
https://api.coincap.io/v2/assets/ethereum
https://api.coincap.io/v2/assets/tether
https://api.coincap.io/v2/assets/usd-coin*/