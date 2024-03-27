import React from 'react'
import { Link } from 'react-router-dom'
import "./page.css"
//import flower from "../objects/flowers.jpg"
import bookArt from "../objects/bookart.png"
import miniBook from "../objects/semiShelf.png"
import x from "../objects/xLogo.png"
import star from "../objects/star.png"


const Home = () => {
  return (
    <div className='home'>
        <div className='home-header'>
            <div className='circle-mode'></div>
            <button className='home-button'><Link to="/books">Get Started</Link></button>
        </div>
        
        <div className='home-body'>
        <div className='re-home-body'>
            <div className='body-text'>
                <span className='text-a'>Literature --- <span>Online library</span></span>
                <h2>Organize your Books<span><br />the reading log</span></h2>
                
                <span className='text-b'>"Digital Shelves Organized 
                    <br /> --- Like a Physical Library"
                </span>

                <div className='text-c-btn'>
                    <div className='c-btn-a'>
                        <div><button className='home-button'><Link to="/books">Start Application</Link></button></div>
                        <a className='c-link' href="/"> Know more about dev</a>
                    </div>
                    <span>Support - Web</span>
                </div>

                <div className='miniBook'>
                    <img src={miniBook} alt="" />
                </div>

                <div className='check'>
                    <div className='check-a'>
                        <div className='check-a-img'>
                            <img src={star} alt="img" />
                        </div>
                        <div className='check-b'>
                            <span>5 Stars</span>
                            <span>Follow <a href='/' className='check-link'>Our Github</a></span>
                        </div>
                    </div>
                    <div className='check-a'>
                        <div className='check-a-img'>
                            <img src={x} alt="img" />
                        </div>
                        <div className='check-b'>
                            <span>3k+</span>
                            <span>Follow <a href='/' className='check-link'>Our X</a></span>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className='body-image'>
                <div className='img-div'><img src={bookArt} alt="img" /></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home
