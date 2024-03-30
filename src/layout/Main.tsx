import React from 'react'
import Personal_1 from './screens/Personal-1'
import Personal_2 from './screens/Personal-2'
import Documentation from './screens/Documentation'
import { _Data_ } from '@/utils/types'
import Intro from './screens/Intro'
import Contact from './screens/Contact'
import Final from './screens/Final'

function Main() {
  const [Data, setData] = React.useState<_Data_>({
    Name: "", M_Name: "", D_Name: "", CPF: "", College: "", Course: "", Country:"", RG: "", Email:"", Address:"", CEP:"", City:"", State:"", district:""
  })
  const ScreensNumber = 6

  return (
    <div className={`w-full relative h-[${ScreensNumber*300}vh] h-[900vh]`}>
        <Intro end={ScreensNumber} i={1}/>
        <Personal_1 end={ScreensNumber} i={2} setData={setData}/>
        <Personal_2 end={ScreensNumber} i={3} setData={setData} Data={Data}/>
        <Documentation end={ScreensNumber} i={4} setData={setData} Data={Data}/>
        <Contact end={ScreensNumber} i={5} setData={setData} Data={Data}/>
        <Final end={ScreensNumber} i={6} Data={Data}/>
    </div>
  )
}

export default Main