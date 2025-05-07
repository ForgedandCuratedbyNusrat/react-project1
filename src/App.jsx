import { useState } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import logo from "./assets/logo-1.png"
import ban1 from "./assets/ban-1.png"
import ball from "./assets/ball.png"
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Navbar expand="lg" className="bg-main">
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Service</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <div className="button">
            <button>Log in</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section id="ban">
  <div className="container">
    <div className="row">
      <div className="col-lg-5">
        <div className="bantxt-main">
          <div className="ban-start-up">
            <a href="#">Startup Business</a>
            <i className="fa-regular fa-bell"></i>
            <div className="one"></div>
          </div>
          <h2>
            Empowering startups to fuel
            their business growth
          </h2>
          <p>
            Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
            velit nibh arcu eu. Id sem varius malesuada tincidunt sodales.
          </p>
          <a className="bottom" href="#">Get started now</a>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-3">
        <div className="ban-right-img">
          <div className="img">
            <img src={ban1} alt="ban1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="deployment">
  <div className="container">
    <div className="row justify-content-sm-center">
      {[1, 2, 3].map((item) => (
        <div className="col-lg-4 col-md-4 col-sm-6" key={item}>
          <div className="dep-main">
            <div className="dep-left">
              <img src={ball} alt="ball" />
            </div>
            <div className="two"></div>
            <div className="dep-txt">
              <h2>Immediate Deployment</h2>
              <p>Et vero eos et accusamus et iusto odio dignissimos</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      
    </>
  )
}

export default App
