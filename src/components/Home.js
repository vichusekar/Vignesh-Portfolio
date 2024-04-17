import React from 'react'
import Typewriter from "typewriter-effect";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../components/Header'
import Resume from '../Pdf/Vignesh R Resume.pdf';

function Home() {
  return <>
    <div className='home-background'>
      <Header />
      <div className='home-about'>
        <div>
          <h2>Hello I'm</h2>
          <h1><b>VIGNESH RAJASEKAR</b></h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcomes you")
                .pauseFor(500)
                .deleteAll()
                .typeString("Full Stack Developer")
                .start();
            }}
          />
          <a
            href={Resume}
            target="_blank"
            rel="noreferrer"
          >
            <Button style={{ width: '150px', height: '50px', marginTop: '50px', backgroundColor: 'white', color: 'black', }}><i className="fa-solid fa-download">Resume</i></Button>
          </a>

        </div>

        {/* <div > */}
        <Card style={{ marginRight: '60px' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/236x/1d/6b/c0/1d6bc03c3dd55bc1c59cec84edb81a46.jpg" />
        </Card>
        {/* </div> */}
      </div>
    </div>
  </>
}

export default Home
