import React from 'react'
import Card from 'react-bootstrap/Card';
import Header from './Header'

function About() {
  return <>
    <Header />
    <div className='about-main-1' style={{ backgroundColor: 'darkseagreen', marginTop: '0px', paddingBottom: '15px', paddingTop: '20px' }}>

      <Card className='about-main' style={{ width: '67%', height: '530px', marginLeft: '230px', marginTop: '10px', paddingTop: '0px' }}>
        <h3>ABOUT ME</h3>
        <Card.Body style={{ display: 'flex', flexDirection: 'row', fontSize: 'medium' }} >
          <img className='about-image' src='https://img.freepik.com/free-vector/illustrator-designer-man-holding-digital-tablet_107791-12062.jpg?size=626&ext=jpg&ga=GA1.1.1951385704.1701609387&semt=ais' alt='loading...' />
          <Card.Text style={{ fontSize: 'larger' }}>
            <b>
              Hello! My name is Vignesh Rajasekar, and I'm thrilled to be here
              <br /><br />
              I am a Full Stack Developer with a passion for creating innovative and robust web applications. Where I've honed my skills in both front-end and back-end development
              <br /><br />
              On the front end, I'll create user friendly experiences using technologies such as HTML, CSS, and JavaScript and provide an exceptional user interface
              <br /><br />
              Moving to the back end, I am proficient in server-side technologies like Node.js, Express.js and I have hands-on experience with database management in MongoDB, MySQL
              <br /><br />
              Thanks for your time
            </b>
          </Card.Text>
        </Card.Body>
      </Card>
    </div >
  </>
}

export default About
