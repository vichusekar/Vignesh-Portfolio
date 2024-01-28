import React, { useState } from 'react'
import gmail from '../images/gmail.png.png'
import amazon from '../images/amazon.png'
import Url from '../images/URLshortener.png'
import password from '../images/reset password.png'
import Card from 'react-bootstrap/Card';
import Header from './Header'
import Button from 'react-bootstrap/Button'

function Projects() {

  let [data, setData] = useState([
    {
      name: 'Gmail Clone',
      description: 'This App developed for gmail users who have Gmail and work in authentication',
      img: gmail,
      deployurl: 'https://whimsical-malabi-870032.netlify.app/'
    },
    {
      name: 'Amazon Web Scraping',
      description: 'The Amazon web scraping used for scraping the products from amazon and take specific requirements about products',
      img: amazon,
      deployurl: 'https://sparkly-clafoutis-d90c6d.netlify.app/'
    },
    {
      name: 'URL Shortener',
      description: 'The URL Shortener app will convert the long url into small url',
      img: Url,
      deployurl: 'https://subtle-sorbet-a3f946.netlify.app/'
    },
    {
      name: 'Password Reset',
      description: 'The password reset web application use the user can reset password only become a already user',
      img: password,
      deployurl: 'https://capable-bienenstitch-f6d4b0.netlify.app/'
    }
  ])
  return <>
    <Header />

    <div className='card-main-projects'>
      <h3 style={{ color: 'black' }}><b>PROJECTS</b></h3>
      {
        data.map((e, i) => {
          return <Card className='project-card' style={{ width: '18rem' }} key={i}>
            <Card.Img variant="top" src={e.img} />
            <Card.Body>
              <Card.Title>{e.name}</Card.Title>
              <Card.Text>
                {e.description}
              </Card.Text>
            </Card.Body>
            <a
              href={e.deployurl}
              target='_blank'
              rel='noreferrer'
            >
              <Button style={{ marginLeft: '100px' }}><i class="fa-solid fa-arrow-up-right-from-square"></i>site</Button>
            </a>
          </Card>

        })

      }
    </div>

  </>
}

export default Projects
