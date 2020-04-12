import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, Carousel, ListGroup } from 'react-bootstrap';
import img1 from './static/1.png'
import img2 from './static/2.png'
import img3 from './static/Captura.PNG'
import img4 from './static/Captura2.PNG'
import img5 from './static/Captura3.PNG'
import facebook from './static/facebook.png'
import instagram from './static/instagram.png'
import twitter from './static/twitter.png'

import './App.css';



function App() {
  return (
    <div className="container">
      <header className="header">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
            <img src={img1} className="img"/>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar>
      </header>
      <main className="main">
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 first"
              src={img3}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 second"
              src={img4}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 thirth"
              src={img5}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="bottom">
          <aside className="aside">
            <div className="aside-article">
              <h4 className="h4">Siguenos en:</h4>
              <div className="iconos">
                <img src={facebook} className="f" />
                <img src={instagram} className="i" />
                <img src={twitter} className="t" />
              </div>
              <ListGroup variant="flush" className="list">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </div>
          </aside>
          <article className="article">
            <img src={img2} className="img2" />
          </article>
        </div>
      </main>
      <footer className="footer">
        <div>
          create by Daniel Romero for En vivo Yoga
        </div>
        <div>
          Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
