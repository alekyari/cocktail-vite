import styles from "./index.module.scss";
import {useState} from "react";


const PopupReservation = ({data}) => {


    return(
        <div className={styles.PopupReservation}>
       
          <h3>Weel Done! {data.name} {""} {data.surName}</h3>
          <p>
            You made a reservation for 
            <strong> {data.date.split("-").reverse().join("-")}</strong> at 
            <strong> {data.hour}</strong>
          </p>
        </div>


    )
}

export default PopupReservation ;