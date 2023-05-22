import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import TopHeader from './components/TopHeader'
import Header from './components/Header'
import Banner from './components/banner'
import Filters from './components/Filters'
import Products from './pages/Products'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SingleProduct from './pages/SingleProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopHeader />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' Component={SingleProduct} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
