import React from "react";
import styles from "./chatBody.module.css";

import DisplayChat from "./displayChat/displayChat";
import AddChat from "./addChat/addChat";

export default function ChatBody(){

    return(

        <div className={styles.chatBody}>
            <DisplayChat/>
            <AddChat/>
        </div>

    );
}