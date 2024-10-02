import React, { useState } from 'react'
import Header from '../../Components/Header'
import Hero from './Hero'
import Bestsellers from './Bestsellers'


function Home({TimeDelay, heroTextDelay}) {
  // console.log(TimeDelay, "Hei");
  if(TimeDelay === 0 ) return
  // console.log(heroTextDelay, "muhammad ali");
  if(heroTextDelay === 0) return
  const [delay, setDelay] = useState(TimeDelay);
  const [textDelay, setTextDelay] = useState(heroTextDelay);


  return (
    <>
        <main>
            <Header delay={delay}/>
            <Hero heroTextDelay={heroTextDelay}/>
            <Bestsellers/>
        </main>
    </>
  )
}

export default Home
