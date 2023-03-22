import { useState } from "react";
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Content from "./components/content";
import ModalDrink from "./components/modalDrink";
import Footer from "./components/Footer";
import styles from "./App.module.scss"
function App() {

  const [category, setCategory] = useState("Cocktail");
  const [modalDrinkContext, setModalDrinkContext] = useState({
    isVisible: false,
    payload: {},
  });

  

  return (
    <div className={styles.App}>
     <Navbar/>
     <Hero setCategory={setCategory} />
     <Content category={category} setModalDrinkContext={setModalDrinkContext}/>
     {modalDrinkContext.isVisible && <ModalDrink  data={modalDrinkContext.payload} setModalDrinkContext={setModalDrinkContext}/>}
     <Footer/>
     </div>
  )
}

export default App
