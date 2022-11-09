import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {cryptoPriceApi} from "../API/WebSocketApi";
import {getFirstPrice} from "../API/GetPriceAPI";

export type currencyType = {
    "bitcoin"?: string,
    "ethereum"?: string,
    "tether"?: string,
    "usd-coin"?: string
}

export type initialStateType = {
    currency: currencyType
}

let initialState: initialStateType = {
    currency: {
        "bitcoin": "0.00",
        "ethereum": "0.00",
        "tether": "0.00",
        "usd-coin": "0.00"
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
        }
    }
})

export const {updateCurrency} = CryptocurrencyReducer.actions;
export default CryptocurrencyReducer.reducer;
