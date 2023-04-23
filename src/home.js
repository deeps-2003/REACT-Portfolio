import React from 'react'
import About from './Skills'
import { Route,Routes ,Link} from 'react-router-dom'
import Traditional from './About'
import Contact from './Contact'
import Resume from './Resume'
import './home.css'



export default function Home() {
  return (
    <div> 
   
    <div className='heading'>
    <h1><b><center><u>MY PORTFOLIO</u></center></b>
    </h1>
    <br></br>
    <Link to="/about"><button className='btn_primary1'>ABOUT</button></Link>
    <Link to="/skills"><button className='btn_primary2'>CERTIFICATIONS</button></Link>
    <Link to="/contact"><button className='btn_primary3'>MY PROFILE</button></Link>
    <Link to="/resume"><button className='btn_primary3'>RESUME</button></Link>
    <br></br><br></br>
    <hr></hr>
   
    </div>
    <Routes>
   <Route path ='/about' element={<Traditional/>} />
   <Route path ='/skills' element={<About/>} />
   <Route path ='/contact' element={<Contact/>} />
   <Route path='/resume' element={<Resume/>}/>
   
    </Routes></div>
  
  )
}