type SubscriberType = (msg:string)=>void;
let subscribers = [] as SubscriberType [];

let tradeWs:WebSocket;
let tradeWsStatus: boolean = false;

export function openTradeWs(){
    tradeWs = new WebSocket('wss://ws.coincap.io/trades/binance');
    tradeWsStatus = true;
    tradeWs.addEventListener("close", ()=>{
        console.log('closed')
        if (tradeWsStatus) {setTimeout(openTradeWs, 3000)}
    });
    tradeWs.addEventListener("message", (e: MessageEvent) => {messageWsHandler(e)})
}

export function closeTradeWs(){
    tradeWsStatus = false;
    tradeWs?.removeEventListener("message", messageWsHandler);
    console.log("closeTradeWs & removeEventListener")
    tradeWs?.close(1000);

}

const messageWsHandler = (msg: MessageEvent) =>{
    let payloadObj = JSON.parse(msg.data);
    if (payloadObj.base === "bitcoin" && payloadObj.quote === "tether"){
        console.log("trade"+msg.data);
        subscribers.forEach(m => m(payloadObj))
    }
}

export const cryptoTradeApi = {
    subscribe(callback: SubscriberType){
        subscribers.push(callback);
        return () => {
            subscribers = subscribers.filter(m => m !== callback)
        }
    }
}