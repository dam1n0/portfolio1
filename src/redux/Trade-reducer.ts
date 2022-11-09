import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {cryptoTradeApi} from "../API/TradeApi";

export type payloadType={
    as?: string[],
    bs?: string[],
    a?: string[],
    b?: string[],
}

export type initialStateItemType = {
    [key: string]: string[]
}

type initialState = {
    as: initialStateItemType,
    bs: initialStateItemType
}

let initialState: initialState = {
    as: {},
    bs: {}
}

export const getTradeAPI = createAsyncThunk(
    'api/webSocketTrade',
    async (_, thunkAPI) => {
        await cryptoTradeApi.subscribe((message) => {
            thunkAPI.dispatch(updateTrade(message))
        });
    }
);

const TradeReducer = createSlice({
    name: 'cryptocurrency',
    initialState,
    reducers: {
        updateTrade(state, action: PayloadAction<any>) {
            for (let key in action.payload) {
                if (key === "as") {
                    action.payload.as.forEach((item: string[]) => {
                            let key = +item[0]*100000;
                            state.as[key as keyof initialStateItemType] = [item[1], item[2]]
                        }
                    )
                } else if (key === "bs") {
                    action.payload.bs.forEach((item: string[]) => {
                        let key = +item[0]*100000;
                            state.bs[key as keyof initialStateItemType] = [item[1], item[2]]
                        }
                    )
                }
                else if (key === "a") {
                    action.payload.a.forEach((item: string[]) => {
                            let key = +item[0]*100000;
                            if(item[1] === "0.00000000"){
                                delete state.as[key as keyof initialStateItemType]
                            }
                            else {
                                state.as[key as keyof initialStateItemType] = [item[1], item[2]]
                            }
                        }
                    );
                    let keyArr = Object.keys(state.as);
                    if (keyArr.length >25){
                        keyArr.sort();
                        for(let i = 25; i<keyArr.length; i++){
                            delete state.as[keyArr[i]]
                        }
                    }
                }
                else if (key === "b") {
                    action.payload.b.forEach((item: string[]) => {
                            let key = +item[0]*100000;
                            if(item[1] === "0.00000000"){
                                delete state.bs[key as keyof initialStateItemType]
                            }
                            else {
                                state.bs[key as keyof initialStateItemType] = [item[1], item[2]]
                            }
                        }
                    );
                    let keyArr = Object.keys(state.bs);
                    if (keyArr.length >25){
                        keyArr.sort((a,b)=>{ // @ts-ignore
                            return b - a}
                        );
                        for(let i = 25; i<keyArr.length; i++){
                            delete state.bs[keyArr[i]]
                        }
                    }
                }
            }

        },
        clearState(state){
            state.as = {};
            state.bs = {}
        }
    }
})

export const {updateTrade, clearState} = TradeReducer.actions;
export default TradeReducer.reducer;
