import React, { useState } from 'react'
import Header from '../../Components/Header'


function About({TimeDelay}) {
  console.log(TimeDelay, "Hei");
  if(TimeDelay === 0 ) return
  const [delay, setDelay] = useState(TimeDelay)

  return (
    <>
        <main>
            <Header delay={delay}/>
            <div className="About">
              
            </div>
        </main>
    </>
  )
}

export default About
