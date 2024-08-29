import { BrowserRouter  } from "react-router-dom"
import {About,Contact ,Feedbacks,
Hero,Navbar,Tech,Works,StarsCanvas} 
from './components'
import Social from "./components/Social"
const App = () => {

  return (
  <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About/>
      {/* <Experience/> */}
      <Tech/>
      <Works/>
      {/* <Feedbacks/> */}
      <div className="realtive z-0">
        <Contact/>
        <StarsCanvas/>
        <Social/>
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App
