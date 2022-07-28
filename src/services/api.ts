import axios from "axios";
import { globalData } from "../global/index";

const instanceApi = axios.create({
    baseURL: globalData.apiUrl,
    timeout: 10000,
});

export default instanceApi;
