import { useState,useEffect } from 'react'
import { Route } from 'react-router'
import { Header } from './components'
import { Home, Cart } from './pages'
import axios from 'axios'
import './scss/app.scss'

function App() {
const [pizzas, setPizzas] = useState([])

useEffect(() => {
  // fetch('http://localhost:3000/db.json')
  // .then(response => response.json())
  // .then(json => setPizzas(json.pizzas))
axios.get('http://localhost:3000/db.json')
.then(({ data }) => {
  setPizzas(data.pizzas)
})

}, [])
console.log(pizzas)
  return (
    <div className="wrapper">
      
      <Header/>
      
      <div className="content">
        <Route exact path='/' render = {() =>  <Home items={pizzas}/> }/>
        <Route exact path='/cart' component = { Cart }/>
       
      </div>
    </div>
  )
}

export default App
