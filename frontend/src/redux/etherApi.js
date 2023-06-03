import axios from "axios";

const etherApi = axios.create({
    baseURL : "http://45.76.129.38:8545",
    //baseURL : "https:etaviralscan//testnet-rpc-seoul.gen.foundation",
    headers : {'content-type' : "application/json"}
})

export default etherApi
