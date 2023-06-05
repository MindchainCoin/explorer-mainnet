import axios from "axios";

const etherApi = axios.create({
    baseURL : "https://rpc-msc.mindchain.info/",
    //baseURL : "https:etaviralscan//testnet-rpc-seoul.gen.foundation",
    headers : {'content-type' : "application/json"}
})

export default etherApi
