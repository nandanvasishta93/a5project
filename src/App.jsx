import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './myapp/Home'
import Mentorship from './myapp/Mentorship'
import Explore from './myapp/Explore'
import Achieve from './myapp/Achieve'
import Project from './myapp/Project'
import Blog from './myapp/Blog'
import Community from './myapp/Community'
import Menu from './wizz/Menu'
import Navbar from './wizz/Navbar'
import Account from './wizz/Account'
import Practice from './myapp/Practice'
import Career from './myapp/Career'
import Application from './myapp/Application'
import Learn from './myapp/Learn'

function App() {
  return ( 
    <div className='appcomponent'>
    <Router>
      <Navbar/>
      
      <aside className='happy'>
      <Application/>
      <Routes >
        <Route path='/mentorship' element={<Mentorship/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/learn' element={<Learn/>}/>
        <Route path='/achieve' element={<Achieve/>}/>
        <Route path='/practice' element={<Practice/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/menu' element={<Menu/>}/>
         </Routes>
         </aside>
   
    </Router>
    </div>
  )
}

export default App
