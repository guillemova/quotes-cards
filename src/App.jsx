import './App.css'
import { useState } from 'react'
import QuotesBox from './components.jsx/QuotesBox'
import quotes from "./json/quotes.json"
import colors from "./json/colors.json"
import Title from './components.jsx/title'


function App() {
  
  //funcion que devuelve un elemento aleatorio de un array
  const indexRandomFromArray = arr => {
    const indexRandom = Math.floor(arr.length * Math.random());
    return arr[indexRandom]
  }
  
  const [quoteRandom, setQuoteRandom] = useState(indexRandomFromArray(quotes))
  const [colorRandom, setColorRandom] = useState(indexRandomFromArray(colors))
  
  //Funcion para cambiar el estado del h1 y el p
  const buttonClick = () => {
    setQuoteRandom(indexRandomFromArray(quotes))
    setColorRandom(indexRandomFromArray(colors))
  } 

const objStyle =  {
  backgroundColor: colorRandom
}

  return (
    <div className = "App" style={objStyle}>
      <Title/>
       <QuotesBox 
       quoteRandom = {quoteRandom}
       buttonClick = {buttonClick}
       colorRandom = {colorRandom}
       />
    </div>
  )
}

export default App
