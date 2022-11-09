//import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


type SubscriberType = (msg:string)=>void;
let subscribers = [] as SubscriberType [];

let priceWS:WebSocket;
let tradeWsStatus: boolean = false;

export function openPriceWs() {
    priceWS = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,tether,usd-coin');
    tradeWsStatus = true;

    priceWS.addEventListener("close", () => {
        console.log('PriceWs closed')
        if (tradeWsStatus) {
            setTimeout(openPriceWs, 3000)
        }
    });
    priceWS.addEventListener("message", (e: MessageEvent) => {
        messageWsHandler(e)
    })
}

export function closePriceWs(){
        tradeWsStatus = false;
        //if(priceWS.readyState === WebSocket.OPEN) {
            priceWS.removeEventListener("message", messageWsHandler);
            priceWS.close(1000)
            console.log("closePriceWs & removeEventListener");
        //}
    }

const messageWsHandler = (msg: MessageEvent) =>{
    console.log("API"+msg.data);
    subscribers.forEach(m => m(msg.data))
    }

export const cryptoPriceApi = {
        subscribe(callback: SubscriberType){
            subscribers.push(callback);
            return () => {
                subscribers = subscribers.filter(m => m !== callback)
            }
        }
    }
/*
//https://docs.coincap.io/#ed9ed517-dd00-4d1d-98e4-772643117d9e
//https://www.freecodecamp.org/news/react-websockets-project-build-real-time-order-book-app/

let api;

export function openTradeWs() {
    api = createApi({
        baseQuery: fetchBaseQuery({baseUrl: "/"}),
        tagTypes: ['CryptoPrices'],
        endpoints: (build) => ({
            subscribeToEvents: build.query({
                query: () => "/",
                async onCacheEntryAdded(
                    {updateCachedData, cacheDataLoaded, cacheEntryRemoved}
                ) {
                    const ws = new WebSocket("wss://ws.coincap.io/prices?assets=bitcoin,ethereum,tether,usd-coin");
                    debugger
                    try {
                        await cacheDataLoaded;

                        const listener = (event: MessageEvent) => {
                            //const data = JSON.parse(event.data);
                            console.log(event.data);
                            updateCachedData(() => {
                                return (event.data);
                            });
                        };
                        ws.addEventListener("message", listener);
                    } catch {
                        //...
                    }
                    await cacheEntryRemoved;
                    ws.close();
                },
            }),
        }),
    });
}

export const {useSubscribeToEventsQuery} = api
export function closeTradeWs(){}*/