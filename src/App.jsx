import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Shop from './views/Shop'
import Cart from './views/Cart'
import Checkout from './views/Checkout'
import HomePage from './views/HomePage'
import UserView from './views/UserView'

function App() {

  return (
    
      <Routes>
        <Route path='/' exact Component={HomePage} />
        <Route path='/Shop' exact Component={Shop} />
        <Route path='/Cart' exact Component={Cart} />
        <Route path='/Checkout' exact Component={Checkout} />
        <Route path='/Panel' exact Component={UserView} />
      </Routes>
  )
}

export default App
