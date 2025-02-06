import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Notfound from './pages/Notfound/Notfound'


function App() {
 return (
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/about' element={<About />} />
     <Route path='*' element ={<Notfound />} />
     
   </Routes>
 )
}

export default App