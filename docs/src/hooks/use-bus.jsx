import { useEffect } from "atomico";

function useBus(type, callback) {
    useEffect(() => {
        if (SeamSDK != undefined) {
            console.log("subscribed")
            SeamSDK.bus.on(type, callback);
        }
        return () => {
            if (SeamSDK != undefined) {
                console.log("unsubscribed")
                SeamSDK.off(type, callback);
            }
        }
    }, []);
    useEffect(() => {
        if (SeamSDK.stores.size > 0) {
            let store = SeamSDK.stores.get("todo");
            store.actions.addTodo("hi")
            console.log(SeamSDK.stores.get("todo"))
        }
    }, [SeamSDK.stores.size])
}

export {
    useBus
}