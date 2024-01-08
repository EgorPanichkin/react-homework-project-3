import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Layout from './pages/Layout'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
