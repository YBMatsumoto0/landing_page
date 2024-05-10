import React from 'react';
import './App.css';
import logo from './images/logo.png';
import screen from './images/screen.png'; 
import IMG1 from './images/image1.jpg'; 
import IMG2 from './images/image2.jpg'; 
import IMG3 from './images/image3.jpg'; 
import { Carousel } from 'react-bootstrap'; 
import { useState } from 'react'; // Remove 'React' from the import statement

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons' 
import { faHeart, faCircleCheck, faBullseye, faArrowDown,faArrowUp } from '@fortawesome/free-solid-svg-icons' 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <a className="navbar-brand" href="#"> <img className="logo" src={logo} alt="Logo" /></a>
      <span className="navbar-text">OneCare</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#mainSection">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#FAQ">FAQ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Contact</a>
          </li>
            <button className="btn btn-outline-light login-btn">Login</button>
        </ul>
      </div>
    </nav>
  );
}


function MainSection() {
  return (
    <div className="row row1" id = "mainSection">
      <div className="col-lg-6 col-sm-12 custom-div1" id="div1">
      
        <center><img className="main_IMG" src={screen} alt="Image" /></center>
        <center>
          <button type="button" className="btn btn-dark btn-lg download-button">
          <FontAwesomeIcon icon={faAndroid} /> Download
          </button>
          <button type="button" className="btn btn-outline-light btn-lg download-button">
          <FontAwesomeIcon icon={faApple} /> Download
          </button>
        </center>
      </div>
      <div className="col-lg-6 col-sm-12 custom-div2" id="div2">
        <p>OneCare aims to develop a mobile and web app to assist Barangay Dalig Health Center with an online appointment 
          system for efficient scheduling and patient care. It will enable remote consultations and access to patient health
          records, empowering health worker with crucial health data. Additionally, it will provide insights into community 
          health trends using Descriptive Data Analysis</p>
        <p>The app will feature an online appointment module for easy scheduling, remote consultation via messaging, and 
          timely notifications for important announcements from the health center.</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container-fluid container2" id = "About">
      <div className="row">
        <div className="col-md-4 col-lg-4 col-sm-12">
          <center>
            <FontAwesomeIcon icon={faCircleCheck} size="3x"/>
            <h4>Easy To Use</h4>
            <p>OneCare have user friendly interfaces.</p>
          </center>
        </div>
        <div className="col-md-4 col=lg-4 col-sm-12">
          <center>
          <FontAwesomeIcon icon={faBullseye} size="3x" />
            <h4>Target Audience</h4>
            <p>All residents of Barangay Dalig are welcome to use our app</p>
          </center>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12">
          <center>
          <FontAwesomeIcon icon={faHeart}size="3x" />           
            <h4>Share our app</h4>
            <p>Please share this app to the other residents of Barangay Dalig</p>
          </center>
        </div>
      </div>
    </div>
  );
}

function CarouselIMG() {
  return (
    <div className='carouselContainer' >
        <h1 className="moreimages">Barangay Dalig</h1>
    <Carousel className='carousel' fade >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMG1}
          alt="First slide"
          style={{ height: "40rem" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMG2}
          alt="Second slide"
          style={{ height: "40rem" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMG3}
          alt="Third slide"
          style={{ height: "40rem" }}
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}


function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id='FAQ'>
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>
        <ul className="faq-list">
          <li>
            <a
              className={`collapsed ${activeIndex === 0 ? 'active' : ''}`}
              onClick={() => toggleAccordion(0)}
              aria-expanded={activeIndex === 0 ? 'true' : 'false'}
              aria-controls="faq1"
            >
              <span className="faq-text">Non consectetur a erat nam at lectus urna duis?</span>
              <FontAwesomeIcon icon={activeIndex === 0 ? faArrowUp : faArrowDown} className="faq-icon" />
            </a>
            <div id="faq1" className={`collapse ${activeIndex === 0 ? 'show' : ''}`}>
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
              </p>
            </div>
          </li>
          <li>
            <a
              className={`collapsed ${activeIndex === 1 ? 'active' : ''}`}
              onClick={() => toggleAccordion(1)}
              aria-expanded={activeIndex === 1 ? 'true' : 'false'}
              aria-controls="faq2"
            >
              <span className="faq-text">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</span>
              <FontAwesomeIcon icon={activeIndex === 1 ? faArrowUp : faArrowDown} className="faq-icon" />
            </a>
            <div id="faq2" className={`collapse ${activeIndex === 1 ? 'show' : ''}`}>
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>
          <li>
            <a
              className={`collapsed ${activeIndex === 2 ? 'active' : ''}`}
              onClick={() => toggleAccordion(2)}
              aria-expanded={activeIndex === 2 ? 'true' : 'false'}
              aria-controls="faq3"
            >
              <span className="faq-text">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</span>
              <FontAwesomeIcon icon={activeIndex === 2 ? faArrowUp : faArrowDown} className="faq-icon" />
            </a>
            <div id="faq3" className={`collapse ${activeIndex === 2 ? 'show' : ''}`}>
              <p>
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}



function LandingPage() {
  return (
    <div>
      <Navbar />
      <MainSection id="mainSection" />
      <About id="About"  />
      <CarouselIMG />
      <FAQ id="FAQ" />
  
    </div>
  );
}

export default LandingPage;
