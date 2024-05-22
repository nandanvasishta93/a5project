import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillBoxFill } from "react-icons/bs";
import { VscCompass } from "react-icons/vsc";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { MdOutlineSocialDistance } from "react-icons/md";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

 function Application() {
    

    return (
        <aside className='mainside'>
            <div className='sidebar'>
                <div className='sidebox'>
                 <div className='sidelink'> <BsFillBoxFill /> <Link to='/home'>Home</Link></div> 
                 <div className='sidelink'> <VscCompass /> <Link to='/explore'> Explore </Link></div> 
                 <div className='sidelink'> <MdOutlineLaptopChromebook />  <Link to='/learn'> Learn </Link></div>
                 <div className='sidelink'> <FaGraduationCap /> <Link to='/achieve'>Achieve</Link> </div>
                 <div className='sidelink'>  <FaBookReader />  <Link to='/practice'>Practice</Link> </div>
                 <div className='sidelink'> <MdOutlineFlightTakeoff /> <Link to='/career'>Career</Link> </div>
                 <div className='sidelink'>   <MdOutlineSocialDistance /> <Link to='/mentorship'>Mentorship</Link> </div>
                 <div className='sidelink'> <MdOutlineSpeakerNotes /> <Link to='/blog'> Blogs</Link> </div> 
                 <div className='sidelink'> <HiMiniUserGroup /> <Link to='/community'>Community</Link> </div>
                </div>
                <footer>
                    <div className='boxboard'></div>
                    <div className='circledouble'></div>
                    <div className='social'>
                    <FaWhatsapp />
                    <FaFacebook />
                    <FaTwitter />
                    <FaYoutube />
                    <FaLinkedin />
                    </div>
                </footer>
            </div>

            
        </aside>
    )
}
export default Application