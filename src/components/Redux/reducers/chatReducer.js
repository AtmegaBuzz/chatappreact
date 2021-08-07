

const initState = {
    list: []
}

export default function chatReducer(state=initState,action){

    switch(action.type){

        case "FETCH_CHAT":
            const newList = [...action.payload.chatList];
            
            return {
                ...state, 
                list : newList
            };
        
        default: return state;
    }
}