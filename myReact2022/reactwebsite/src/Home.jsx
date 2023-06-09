import React, { useContext, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { AppContext } from './context'

const Home = () => {

  const {updateHomePage} = useContext(AppContext);

  useEffect(() => {
    updateHomePage();
  },[])

  // const data = {
  //   name : "Home Page",
  //   image : "./images/hero.jpeg"
  // };

  return (
    <>
    {/* <HeroSection {...data} /> */}
    <HeroSection />
    </>
  )
}

export default Home