import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {cryptoPriceApi} from "../API/WebSocketApi";
import {cryptoTradeApi} from "../API/TradeApi";
import {getFirstPrice} from "../API/GetPriceAPI";

export type currencyType = {
    "bitcoin"?: string,
    "ethereum"?: string,
    "tether"?: string,
    "usd-coin"?: string
}

export type tradeItem = {
    price: number,
    volume: number,
    priceUsd: number
}

export type tradeType = {
    buy: tradeItem[],
    sell: tradeItem[]
}

export type initialStateType = {
    currency: currencyType,
    trade: tradeType
}

let initialState: initialStateType = {
    currency: {
        "bitcoin": "0.00",
        "ethereum": "0.00",
        "tether": "0.00",
        "usd-coin": "0.00"
    },
    trade: {
        buy: [],
        sell: []
    }
}

export const getCryptoPriceAPI = createAsyncThunk(
    'api/Price',
    async (_, thunkAPI) => {
        await getFirstPrice(initialState.currency, (message) => {
            thunkAPI.dispatch(updateCurrency(message));
        });
        await cryptoPriceApi.subscribe((message) => {
            thunkAPI.dispatch(updateCurrency(message))
        });
    }
);

export const getTradeAPI = createAsyncThunk(
    'api/webSocketTrade',
    async (_, thunkAPI) => {
        await cryptoTradeApi.subscribe((message) => {
            thunkAPI.dispatch(updateTrade(message))
        });
    }
);

const CryptocurrencyReducer = createSlice({
    name: 'cryptocurrency',
    initialState,
    reducers: {
        updateCurrency(state, action: PayloadAction<string>) { //можно задать обьект из initialState в <string>
            let payloadObj = JSON.parse(action.payload);//{"bitcoin":"18691.82","ethereum":"1242.28"}
            for (let key in payloadObj) {
                if (key in state.currency) {
                    state.currency[key as keyof currencyType] = payloadObj[key]
                }

            }
        },
        updateTrade(state, action: PayloadAction<any>) {

                let item = {
                    price: +action.payload.price,
                    volume: +action.payload.volume,
                    priceUsd: +action.payload.priceUsd
                }
                if (action.payload.direction === "buy") {
                    state.trade.buy.push(item)
                } else state.trade.sell.push(item)

        }
    }
})//{"exchange":"binance","base":"bitcoin","quote":"tether","direction":"buy",
// "price":19365.59,"volume":0.07,"timestamp":1666616454283,"priceUsd":19371.064153143514}

export const {updateCurrency, updateTrade} = CryptocurrencyReducer.actions;
export default CryptocurrencyReducer.reducer;
