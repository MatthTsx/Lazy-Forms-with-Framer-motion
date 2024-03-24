import React from 'react'
import Personal_1 from './screens/Personal-1'
import Personal_2 from './screens/Personal-2'

function Main() {
  const ScreensNumber = 2

  return (
    <div className={`w-full relative h-[${ScreensNumber*300}vh] h-[600vh]`}>
        <Personal_1 end={ScreensNumber} i={1}/>
        <Personal_2 end={ScreensNumber} i={2}/>
    </div>
  )
}

export default Main