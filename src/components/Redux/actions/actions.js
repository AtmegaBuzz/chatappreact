
export const addChat = (chatList)=>{

    return {
        type: "FETCH_CHAT",
        payload: {
            chatList
        }
    }
}
