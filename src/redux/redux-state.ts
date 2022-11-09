import {configureStore} from '@reduxjs/toolkit'
import ProfileReducer from "./Profile-reducer";
import CryptocurrencyReducer from "./Cryptocurrency-reducer"
import GamesReducer from "./Games-reducer";
import {profileApi} from "../API/getProfileInfoAPI";
import TradeReducer from "./Trade-reducer";


let store = configureStore({
    reducer:{
        //Profile:ProfileReducer,
        Cryptocurrency:CryptocurrencyReducer,
        Trade: TradeReducer,
        Games:GamesReducer,
        [profileApi.reducerPath]:profileApi.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(profileApi.middleware)
});

export type appStateType = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch


export default store;
//@ts-ignore
window.store = store;