import {io} from "socket.io-client"

let socket;

export const connectSocket = ()=>{
    socket = io(import.meta.env.VITE_API_URL,{
        withCredentials: true,
    })

    return socket
}

export const getSocket = ()=>{
    if(!socket) throw new Error("socket not initialized")
    return socket
}