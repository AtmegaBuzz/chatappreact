import React from "react";
import styles from "./chat.module.css";


export default function Chat(props){

    console.log(props.time)
    return(

        <div className={styles.Chat}>
            <div className={styles.chatData}>
                <small>{props.name} posted at {props.time}</small> 
                <p>{props.chatData}</p>
            </div>
        </div>
    );

}