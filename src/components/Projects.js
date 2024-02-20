import React, { useState } from 'react'
import gmail from '../images/gmail.png.png'
import amazon from '../images/amazon.png'
import Url from '../images/URLshortener.png'
import hall_booking from '../images/hall_booking.png'
import Blog from '../images/blog.png'
import Card from 'react-bootstrap/Card';
import Header from './Header'
import Button from 'react-bootstrap/Button'

function Projects() {

  let [data, setData] = useState([
    {
      name: 'Gmail Clone',
      description: 'This App developed for gmail users who have Gmail and work in authentication',
      img: gmail,
      deployurl: 'https://whimsical-malabi-870032.netlify.app/',
      githuburl: 'https://github.com/vichusekar/Gmail-Clone-Client'
    },
    {
      name: 'Amazon Web Scraping',
      description: 'The Amazon web scraping used for scraping the products from amazon and take specific requirements about products',
      img: amazon,
      deployurl: 'https://sparkly-clafoutis-d90c6d.netlify.app/',
      githuburl: 'https://github.com/vichusekar/WebScraping-Ecommerce/tree/clientt'
    },
    {
      name: 'Blog App',
      description: 'The Blog app is create an new blog of title, images, details and we can edit and delete that blog',
      img: Blog,
      deployurl: 'https://glowing-daifuku-e624da.netlify.app/',
      githuburl: 'https://github.com/vichusekar/Blog-App'
    },
    {
      name: 'Hall Booking',
      description: 'The Hall Booking app is create an room as a user and the user can change and do forgot-password',
      img: hall_booking ,
      deployurl: 'https://incomparable-brigadeiros-321042.netlify.app/',
      githuburl: 'https://github.com/vichusekar/hall_booking'
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
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <a
              href={e.githuburl}
              target='_blank'
              rel='noreferrer'
            >
              <Button variant='secondary'><i className="fa-brands fa-1x fa-github"></i>source</Button>
            </a>
            <a
              href={e.deployurl}
              target='_blank'
              rel='noreferrer'
            >
              <Button style={{ marginLeft: '0px' }}><i class="fa-solid fa-arrow-up-right-from-square"></i>site</Button>
            </a>
            </div>
          </Card>

        })

      }
    </div>

  </>
}

export default Projects
