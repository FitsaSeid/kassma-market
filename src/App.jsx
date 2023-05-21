import { useState } from 'react'
import './App.css'
import TopHeader from './components/TopHeader'
import Header from './components/Header'
import Banner from './components/banner'
import Filters from './components/Filters'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopHeader />
      <Header />
      <Banner />
      <Filters />
      <Products />
      <Footer />
    </>
  )
}

export default App
