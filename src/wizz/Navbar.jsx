import React from 'react';
import { Link } from 'react-router-dom';
import "./css/Wizz.css"
import { IoLogoDropbox } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiBellOn } from "react-icons/ci";

function Navbar() {
    return (
       <>
        <nav className='navdiv'>  
            <div><img src="/src/assets/myfile/wizz2.jpg" alt="" height={"50px"}  width={"120px"}/></div> 
            <div className='navmain' >
                <div className='bell'><CiBellOn /></div>
            
                 <div className='menu' ><Link to="/account">Account <div className='logop'><CgProfile /></div></Link></div>
                 <div className='menu'> <Link to="/menu">Menu <div className='logop' ><IoLogoDropbox /></div></Link> </div>
            </div>
          
        </nav>
        <hr />
       </>
    );
}

export default Navbar;

