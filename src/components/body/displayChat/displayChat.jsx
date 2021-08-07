import React, {useRef, useEffect} from "react";
import styles from "./displayChat.module.css";

import { useSelector } from "react-redux";
import Chat from "./Chats/chat";


// let xH = chatWindow.scrollHeight; 
// chatWindow.scrollTo(0, xH);

export default function DisplayChat(){


    const messages = useSelector(stateObj=>stateObj.chatReducer);
    for(let i in messages){
        console.log(messages[i].postTiming)
    }
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
    
    useEffect(() => {

        scrollToBottom()
        
    }, [messages]);

    
    return(

        <div className={styles.ChatContainer}>

            {
                messages.list.map((data)=>{

                    return (<Chat key={data.id}
                         name={data.name} 
                         time={data.postTiming}
                         chatData={data.chatData}/>)


                })
            }
            
            <div ref={messagesEndRef} />

            

        </div>
    );
}