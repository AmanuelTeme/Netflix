import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import Rowlists from '../../Components/Rows/RowLists/RowLists'

const Home = () => {
  return (
    <>
        <Header />
        <Banner />
        <Rowlists />
        <Footer />
    </>
  )
}

export default Home