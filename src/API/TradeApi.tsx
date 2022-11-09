type SubscriberType = (msg:string)=>void;
let subscribers = [] as SubscriberType [];

let tradeWs:WebSocket;
let tradeWsStatus: boolean = false;

export function openTradeWs(){
    tradeWs = new WebSocket('wss://beta-ws.kraken.com');
    tradeWsStatus = true;
    tradeWs.addEventListener("open", () => {
        console.log('tradeWs open')
        tradeWs.send(JSON.stringify(
            {
                "event": "subscribe",
                "pair": [
                    "XBT/USD"
                ],
                "subscription": {
                    "name": "book",
                    "depth": 25
                }
            }
        ));
        tradeWs.addEventListener("close", ()=>{
            console.log('tradeWs closed')
            if (tradeWsStatus) {setTimeout(openTradeWs, 3000)}
        });
        tradeWs.addEventListener("message", (e: MessageEvent) => {messageWsHandler(e)})
    })

}

export function closeTradeWs(){
    tradeWsStatus = false;
    if(tradeWs.readyState === WebSocket.OPEN) {
        tradeWs?.removeEventListener("message", messageWsHandler);
        console.log("closeTradeWs & removeEventListener")
        tradeWs?.close(1000);
    }
}

const messageWsHandler = (msg: MessageEvent) =>{
    let payload = JSON.parse(msg.data);
        console.log(payload);
        if(payload[0]===336){
            subscribers.forEach(m => m(payload[1]))
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
//https://docs.kraken.com/websockets/#message-book
//https://docs.kraken.com/websockets-beta/