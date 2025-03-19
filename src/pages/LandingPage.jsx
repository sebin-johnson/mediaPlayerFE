import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      {/* first section */}
      <Container className='d-flex justify-content-evenly align-items-center mt-5'>
        <Row className='row-cols-1 row-cols-md-2'>
          <Col>
            <h3 className='fw-bold'>Welcome to <span className='text-warning'>StreamiFy</span></h3>
            <p style={{ textAlign: "justify" }}>The Media Player is a feature-rich and intuitive application designed to deliver a seamless audio and video playback experience. It supports a wide range of file formats, ensuring compatibility with various media types without the need for additional codecs. With a modern and user-friendly interface, this media player allows users to enjoy their favorite content with smooth performance and high-quality output. It offers advanced playback controls, customizable themes, subtitle support, and playlist management for an enhanced user experience. Optimized for efficiency, it runs smoothly on both low-end and high-end devices, making it the perfect choice for media enthusiasts.</p>
            <Link to={'/home'}>
              <button className='btn btn-warning fw-bold mb-3'>GET STARTED <i className="fa-solid fa-arrow-right ms-1"></i></button>
            </Link>
          </Col>
          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" width={'330px'} className='ms-2 rounded-2' alt="" />
          </Col>
        </Row>
      </Container>
      {/* second section */}
      <div className="container mt-4">
        <h3>FEATURES</h3>
        <div className='d-flex justify-content-evenly align-items-center mt-5'>
          <Card style={{ width: '18rem' }} className='bg-black border text-white'>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>Add Videos</Card.Title>
              <Card.Text>
                Upload and organize your video collection effortlessly, ensuring quick access and a well-structured library for easy management.
              </Card.Text>
              <Link to={'/home'}>
                <Button variant="warning">Add Video</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='bg-black border text-white'>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>View Videos</Card.Title>
              <Card.Text>
                Explore your stored videos and enjoy high-quality playback with smooth controls, creating and viewing experience.
              </Card.Text>
              <Link to={'/home'}>
                <Button variant="warning">View Video</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='bg-black border text-white'>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Keep a record of previously watched videos, allowing you to resume playback instantly and never lose track of your favorites.
              </Card.Text>
              <Link to={'/history'}>
                <Button variant="warning">View History</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* third section */}
      <div className="container mt-5 border border-1 rounded-3 p-4">
        <Row className='row-cols-1 row-cols-md-2'>
          <Col>
            <h3 className='mb-3'>SIMPLE & POWERFULL</h3>
            <p><span>PLAY EVERYTHING: </span>Experience high-quality playback with smooth controls, adjustable settings, and an immersive viewing experience tailored to your preference.</p>
            <p><span>MIX MANAGER: </span>Create, customize, and manage playlists effortlessly, allowing you to organize and enjoy your favorite videos anytime with seamless playback.</p>
            <p><span>PREMIUM ACCESS: </span>Enhance your experience with a premium subscription, unlocking exclusive content, advanced features, and an ad-free viewing environment.</p>
          </Col>
          <Col>
            <div>
              <iframe width="100%" height="300" src="https://www.youtube.com/embed/YQ6ShcAU_dQ" title="Aathi | Full Video Song | Kaththi | Vijay, Samantha Ruth Prabhu" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default LandingPage
