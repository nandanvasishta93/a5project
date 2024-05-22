import React from 'react'
import { FaBookReader } from "react-icons/fa";
import { IoBookmarks } from "react-icons/io5";
import { GoArrowDownRight } from "react-icons/go";
 function Mentorship() {
    

    return (
        <div className='content'>
            <div className='main1'><div className='submain'><img src="/src//assets/myfile/sidebox.jpg" alt="" height={"100%"} width={"100%"}/></div> 
            <div className='subyy'>MY Mentor</div>
            <h2 className='namementor'>Mr.Ankit Awasthi</h2>
           
            <div>
                <div className='highlight'><FaBookReader /> <h3 className='highlightsdet'> Highlights: <div className=''></div> IIT Delihi Graduate|Bain &company</h3></div>
                <div className='about'><IoBookmarks /> <h3 className='aboutdet'> About: Anikit is an IIT Delhi graduate and current Bain & company consultant,specialize in strategic consulting and business optimizationz</h3></div>
            </div>

            <button className='connect'>Connect Me</button>
            </div>

            <div className='mainsession'>
            <div className='session'>
            <h1 className='sessionbooking'>Session Booking</h1>
            
                    <h3 className='sessiondata'>Book a session for guidance in any
                    <br /> specific like projects, interview,etc</h3>
                    <button className='booksession'>Book a Session</button>
                <div className='sessioncircle'>
                  
                    <img src="/src/assets/myfile/sc1.jpg" alt="" height={"150px"} width={"150px"}/>
                </div>
            </div>
            <div className='mangesession'>
                <div><h2 className='mangetitle'>Manage Sessions</h2>
             
                <h4 className='masterclass'>Upcoming Sessions: 2</h4>
                <h4 className='matercredit'>Credits Left: 5</h4>
                </div>
                <div className='mancircle'>
                    <h1 className='mcircle'>4</h1>
                   <h3 className='mcrdata'> Sessions Booked</h3>
                </div>
            </div>
            </div>
            <h1 className='exmaster'>Exclusive Masterclass</h1>

            <div className='cardbox'>
                <div className='card'><div className='cardimg'>
                    <img src="/src/assets/myfile/sc5.jpg" alt=""  height={"100%"} width={"100%"} />
                </div>
                <div className='smallcard'>
                <h1 className='cardtext'>Competitive Programming</h1>
                <button className='smallbtn'>1 hr 30 Min</button>
                </div>

                </div>
                <div className='card'><div className='cardimg'>
                    <img src="/src/assets/myfile/sc6.jpg" alt=""  height={"100%"} width={"100%"} />
                </div>
                <div className='smallcard'>
                <h1 className='cardtext'>Case Study & Guesstimates</h1>
                <button className='smallbtn'>Live</button>
                </div>

                </div>
                <div className='card'><div className='cardimg'>
                    <img src="/src/assets/myfile/sc4.jpg" alt="" height={"100%"} width={"100%"}/>
                </div>
                <div className='smallcard'>
                <h1 className='cardtext'>Financial Analysis</h1>
                <button className='smallbtn'>1 hr 30 Min</button>
                </div>

                </div>
                <div className='card'><div className='cardimg'>
                    <img src="/src/assets/myfile/sc7.jpg" alt=""  height={"100%"} width={"100%"} />
                </div>
                <div className='smallcard'>
                <h1 className='cardtext'>Resume Making</h1>
                <button className='smallbtn'>1 hr 30 Min</button>
                </div>
                </div>
            </div>
            <h1 className='exmaster'>Suggested sessions</h1>
            <div className='maintype'>
                <div className='typebox'>
                    <div className='typeby'>
                        <h1 className='copyprog'>Competitive Programming</h1>
                        <button className='typebtn'>
                           <h3 className='booknow'> Book Now</h3>
                            <div className='typecircle'><GoArrowDownRight /></div>
                        </button>
                    </div>
                  <div className='typegame'>
                  <img src="/src/assets/myfile/sc1.jpg" alt="" height={"100px"} width={"110px"} />
                    </div>
                    </div>

                <div className='typebox'>
                <div className='typeby'>
                        <h1 className='copyprog'>Internship Fundae</h1>
                        <button className='typebtn'>
                           <h3 className='booknow'> Book Now</h3>
                            <div className='typecircle'><GoArrowDownRight /></div>
                        </button>
                    </div>
                    <div className='typegame1'>
                        <img src="/src/assets/myfile/sc3.jpg" alt="" height={"100px"} width={"120px"}/>
                    </div>
                    </div>

                <div className='typebox'>
                <div className='typeby'>
                        <h1 className='copyprog'>Interview Ready</h1>
                        <button className='typebtn'>
                           <h3 className='booknow'> Book Now</h3>
                            <div className='typecircle'><GoArrowDownRight /></div>
                        </button>
                    </div>
                    <div className='typegame2'>
                        <img src="/src/assets/myfile/sc2.jpg" alt="" height={"100px"} width={"100px"} />
                    </div>
                    </div>
            </div>
        </div>
    )
}
export default Mentorship