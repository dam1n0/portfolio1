import {configureStore} from '@reduxjs/toolkit'
import CryptocurrencyReducer from "./Cryptocurrency-reducer"
import GamesReducer from "./Games-reducer";
import TradeReducer from "./Trade-reducer";


let store = configureStore({
    reducer:{
        Cryptocurrency:CryptocurrencyReducer,
        Trade: TradeReducer,
        Games:GamesReducer,
    },
});

export type appStateType = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch


export default store;
//@ts-ignore
window.store = store;