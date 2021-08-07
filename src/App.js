import React,{ useEffect, useState } from "react";
import styles from "./App.module.css";
import { chatRef } from "./firebase";

// jsx imports
import NavBar from "./components/navbar/navBar";
import ChatBody from "./components/body/chatBody";
import Login from "./components/Login/login";

import {useDispatch} from "react-redux";
import { addChat } from "./components/Redux/actions/actions";

export default function App(){

  const dispatch = useDispatch();
  const [login,setLogin] = useState(false);
  


  useEffect(()=>{
    
    // fetch data on every message
    chatRef.on('value',snapshot=>{
      
      let tempChatList = [];
      let snapshotVal = snapshot.val();


      for(let id in snapshotVal){
        tempChatList.push({
          id,
          name: snapshotVal[id].name,
          chatData: snapshotVal[id].message,
          postTiming: snapshotVal[id].postTiming,
        })

      }
      
      dispatch(addChat(tempChatList));
    })

  },[])

  let content = "";

  if(login){
      content = (
              <>
                <NavBar/>
                <ChatBody/>
              </>
      )
  }

  else if(!login){
    content = (
        <><Login setLogin={setLogin}/></>
    )
  }


  return(
    
    <div className={styles.content}>
      {content}
    </div>
      
  );
}