import React from 'react'
import logo from '../../public/favicon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center mt-5 bg-dark'>
                <div className='d-md-flex justify-content-evenly align-items-center gap-4'>
                    <div className='overview' style={{ width: "400px" }} >
                        <h5 className='d-flex align-items-center mt-4'>
                            <img src={logo} style={{ width: "10%" }} className='me-2' alt="" />
                            <span className='fw-semibold text-white'>StreamiFy</span>
                        </h5>
                        <p style={{ color: "white", textAlign: "justify" }}>A sleek and user-friendly media player that supports multiple audio and video formats, offering smooth playback, customizable controls, and a modern interface for an enhanced entertainment experience.</p>
                    </div>
                    <div className='links' style={{ color: "white" }}>
                        <h4>Links</h4>
                        <Link style={{ textDecoration: "none", color: "white" }} to="/">Landing Page</Link><br />
                        <Link style={{ textDecoration: "none", color: "white" }} to="/home">Home</Link><br />
                        <Link style={{ textDecoration: "none", color: "white" }} to="/history">Watch History</Link><br />
                    </div>
                    <div className='guides' style={{ color: "white" }}>
                        <h4>Guides</h4>
                        React
                        <br />
                        React Bootstrap
                        <br />
                        Font Awesome
                    </div>
                    <div className='contact mt-4' style={{ color: "white" }}>
                        <h4>Contact Us</h4>
                        <div className='d-flex'>
                            <input type="email" className='form-control' placeholder='Enter your Email' />
                            <button className='btn btn-warning ms-2'>Subscribe</button>
                        </div>
                        <div className='d-flex justify-content-evenly align-align-items mt-4 mb-4'>
                            <i className="fa-brands fa-instagram fa-2x"></i>
                            <i className="fa-brands fa-youtube fa-2x"></i>
                            <i className="fa-brands fa-whatsapp fa-2x"></i>
                            <i className="fa-brands fa-reddit fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-md-flex justify-content-center align-items-center mt-4 mb-4'>
                <p className="mb-0 text-center">&copy; 2025 STERAMIFY. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
