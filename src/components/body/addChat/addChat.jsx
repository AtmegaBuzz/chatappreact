import React,{useState} from "react";
import styles from "./addChat.module.css";
import {chatRef} from "../../../firebase";

// material ui icon imports
import SendIcon from '@material-ui/icons/Send';

const Filter = require("bad-words");

const filter = new Filter();

const words = require("../../../bad-words-filter/badWords.json");

filter.addWords(...words);



export default function AddChat(){

    const [message,setMessage] = useState("");


    

    const submitHandler = (e)=>{
        e.preventDefault();
        const time = new Date();
        
        let clean_message = filter.clean(message);  // filter bad words
        

        if(message.length!==0 && message!==undefined){
            
            const name = localStorage.getItem('name');
            
            const postTiming = `[${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}s]  ${time.getDate()}/${time.getMonth()}/${time.getFullYear()}`;
            chatRef.push({
                name,message:clean_message,postTiming
            });
            setMessage("");

        }

    }

    return(
        <div className={styles.ChatSection}>

            <form onSubmit={submitHandler} className={styles.Form}>
                <div id={styles.inputCont}>
                    <textarea 
                     onChange={(e)=>{setMessage(e.target.value)}}
                     type="text"
                     value={message} 
                     name="message" 
                     placeholder="message"/>
                </div>
                <button type="submit" id={styles.sendCont}>
                        <SendIcon/>                   
                </button>
            </form>

        </div>
    );
}