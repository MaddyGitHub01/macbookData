import React, { useContext, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { AppContext } from './context'

const About = () => {

  const {updateAboutPage} = useContext(AppContext);

  useEffect(() => {
    updateAboutPage();
  },[])

  // const data = {
  //   name : "About Page",
  //   image : "./images/about.jpeg"
  // };

  return (
    <>
    {/* <HeroSection {...data} /> */}
    <HeroSection />
    </>
  )
}

export default About