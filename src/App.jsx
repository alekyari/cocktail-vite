import { useState } from "react";
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Content from "./components/content";
import ModalDrink from "./components/modalDrink";
import Footer from "./components/Footer";
import ModalReservation from "./components/modalReservation";
import PopupReservation from "./components/popupReservation";
import styles from "./App.module.scss"
function App() {
  const [showModalReservation, setShowModalReservation] = useState(false);
  const [category, setCategory] = useState("Cocktail");
  const [modalDrinkContext, setModalDrinkContext] = useState({
    isVisible: false,
    payload: {},
  });
  const [popupReservationContext, setPopupReservationContext] = useState({
    data:{},
    isVisible:false,
  });
  

  return (
    <div className={styles.App}>
     <Navbar setShowModalReservation={setShowModalReservation} />
     <Hero setCategory={setCategory} />
     <Content category={category} setModalDrinkContext={setModalDrinkContext}/>
     {modalDrinkContext.isVisible && <ModalDrink  data={modalDrinkContext.payload} setModalDrinkContext={setModalDrinkContext}/>}
     {showModalReservation && <ModalReservation setShowModalReservation={setShowModalReservation} setPopupReservationContext={setPopupReservationContext} />}
     {popupReservationContext.isVisible && <PopupReservation  data={popupReservationContext.data}/>}
     <Footer/>
     </div>
  )
}

export default App
