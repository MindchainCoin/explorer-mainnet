import axios from "axios";

const etherApi = axios.create({
    baseURL : "https://mainnet-rpc.metaviralscan.com",
    //baseURL : "https://testnet-rpc-seoul.gen.foundation",
    headers : {'content-type' : "application/json"}
})

export default etherApi
