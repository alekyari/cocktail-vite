import { useState } from "react";
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Content from "./components/content";
import './App.scss'
function App() {

  const [category, setCategory] = useState("Cocktail");

  

  return (
    <div className="App">
     <Navbar/>
     <Hero setCategory={setCategory} />
      <Content category={category} />
     </div>
  )
}

export default App
