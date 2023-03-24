import styles from "./index.module.scss";
import {useState} from "react";


const ModalReservation = ({setShowModalReservation , setPopupReservationContext}) => {
const [name, setName] = useState("");
const [surName, setSurName] = useState("");
const [date, setDate] = useState("");
const [hour, setHour] = useState("");


const data = {
    name:name,
    surName:surName,
    date:date,
    hour:hour,
}
const onHandleSetPopupReservationContext = () =>{
setPopupReservationContext((prev) => ({
    ...prev,
    data: data,
    isVisible: true,
  }));
  setTimeout(() => {
    setPopupReservationContext((prev) => ({
        ...prev,
        data: data,
        isVisible: false,
      }));
  }, 5000)};

const onHandleNameInput = (e) => setName(e.target.value);
const onHandleSurNameInput = (e) => setSurName(e.target.value);
const onHandleDateInput = (e) => setDate(e.target.value);
const onHandleHourInput = (e) => setHour(e.target.value);
const onHandleSubmit = (e) => {e.preventDefault();  onHandleSetPopupReservationContext() ; setShowModalReservation(false)};
const onHandleCloseModal = (e) => {e.preventDefault(); setShowModalReservation(false)};
    return(
        <div  className={styles.ModalReservation}>
          <div  className={styles.ModalOverlay}>

            
            <div className={styles.ModalContent}>
                <img src="https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Shirley-temple-1e55cf0.jpg?quality=90&webp=true&resize=300,272" alt="Cocktail" className={styles.img} />
                <form className={styles.form} onSubmit={onHandleSubmit}>
                    <button onClick={onHandleCloseModal} className={styles.btn}>X</button>
                    <label htmlFor="text">Name</label>
                    <input id="text" name="text" type="text" placeholder="Name" value={name} required onChange={onHandleNameInput}/>
                    <label htmlFor="text">Surname</label>
                    <input id="text" name="text" type="text" placeholder="Surname" value={surName} required onChange={onHandleSurNameInput}/>
                    <label htmlFor="date">Date</label>
                    <input id="date" name="date" type="date" placeholder="Date" value={date} required onChange={onHandleDateInput}/>
                    <label htmlFor="time">Hour</label>
                    <input id="time" name="timer" type="time" placeholder="Hour" value={hour} required onChange={onHandleHourInput}/>
                    <input type="submit" value="Reserve" />
                </form>

            </div>
          </div>
        </div>


    )
}

export default ModalReservation ;