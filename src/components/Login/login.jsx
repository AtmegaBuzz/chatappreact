import React from "react";
import styles from "./login.module.css";

export default function Login(props){

    const loginHandler = (e)=>{
        e.preventDefault();
        if(e.target.userName.value.length!==0&&e.target.userName.value!==undefined){
            localStorage.setItem("name",e.target.userName.value);
            localStorage.setItem("login",true);
            props.setLogin(true);

        }
    }   

    return(
        <>
            <h1>UniCHat Login</h1>
            <form onSubmit={loginHandler} className={styles.login}>
                <input name="userName" type="text" placeholder="name"/>
                <button type="submit">Login</button>
            </form>
        </>

    );
}