import { useEffect } from 'react'
import { Route } from 'react-router'
import { Header } from './components'
import { Home, Cart } from './pages'
import { setPizzas} from './redux/actions/pizzasActions'

import axios from 'axios'
import './scss/app.scss'
import { useDispatch } from 'react-redux'

function App() {

const dispatch = useDispatch()

useEffect(() => {
  // fetch('http://localhost:3000/db.json')
  // .then(response => response.json())
  // .then(json => setPizzas(json.pizzas))
axios.get('http://localhost:3001/pizzas')
.then(({ data }) => {
  dispatch(setPizzas(data))
})

}, [dispatch])

  return (
    <div className="wrapper">
      
      <Header/>
      
      <div className="content">
        <Route exact path='/' component={ Home }/>
        <Route exact path='/cart' component = { Cart }/>
       
      </div>
    </div>
  )
}

export default App
