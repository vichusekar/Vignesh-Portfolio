import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Header from './Header'
import CSS from '../images/css.png'
import HTML from '../images/html.png'
import Express from '../images/express.png'
import Git from '../images/git.png'
import Js from '../images/javascript.png'
import Mongodb from '../images/mongodb.png'
import Node from '../images/node.png'
import react from '../images/react.png'
import Bootstrap from '../images/download.png'

function Skills() {
    let [data, setData] = useState([
        {
            name: 'HTML',
            img: HTML
        },
        {
            name: 'CSS',
            img: CSS
        },
        {
            name: 'Bootstrap',
            img: Bootstrap
        },
        {
            name: 'Javascript',
            img: Js
        },
        
        {
            name: 'React JS',
            img: react
        },
        {
            name: 'Node JS',
            img: Node
        },
        {
            name: 'Express JS',
            img: Express
        },
        {
            name: 'MongoDB',
            img: Mongodb
        },
        {
            name: 'Git',
            img: Git
        }
    ])
    return <>
        <div className='skill-body'>
            <Header />
            <h3 style={{ color: 'black',marginTop:'40px', marginLeft:'30px'  }}><b>SKILLS</b></h3>
            <div className='card-main-skills'>
                
                {
                    data.map((e, i) => {
                        return <Card style={{ width: '130px', height: '170px' }} key={i}>
                            <Card.Img variant="top" src={e.img} />
                            <Card.Body>
                                <Card.Title>{e.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    })

                }
            </div>
        </div>
    </>
}

export default Skills
