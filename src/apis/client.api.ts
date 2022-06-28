import axios from "axios";

export const petDeskClient = axios.create({
    baseURL: process.env.REACT_APP_VET_URL,
    responseType: "json",
    headers: {
        "Content-Type": "application/json",
        Pragma: "no-cache"
    }
});