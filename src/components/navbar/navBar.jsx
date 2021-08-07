import React from "react";
import styles from "./navBar.module.css";

// icon imports
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function NavBar(){

    const name = localStorage.getItem("name");

 

    return(

        <div className={styles.navContainer}>
            <div className={styles.navBar}>
                <div className={styles.logo}>
                    <h2>UniCHat</h2>
                </div>
                <div className={styles.Search}>
                    <div><SearchIcon/></div>
                    <div><MoreVertIcon/></div>
                </div>
            </div>
            <div>
                
                <div>
                    <h3>Welcome {name}</h3>
                </div>
            </div>
        </div>

    );
}