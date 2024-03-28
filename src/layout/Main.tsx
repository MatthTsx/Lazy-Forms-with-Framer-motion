import React from 'react'
import Personal_1 from './screens/Personal-1'
import Personal_2 from './screens/Personal-2'
import Documentation from './screens/Documentation'

function Main() {
  const ScreensNumber = 3

  return (
    <div className={`w-full relative h-[${ScreensNumber*300}vh] h-[900vh]`}>
        <Personal_1 end={ScreensNumber} i={1}/>
        <Personal_2 end={ScreensNumber} i={2}/>
        <Documentation end={ScreensNumber} i={3}/>
    </div>
  )
}

export default Main