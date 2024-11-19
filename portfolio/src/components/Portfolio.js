import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Portfolio.css';  // Import the custom CSS file

const Portfolio = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about" className="custom-nav-link">About</Nav.Link>
              <Nav.Link href="#portfolio" className="custom-nav-link">Portfolio</Nav.Link>
              <Nav.Link href="#contact" className="custom-nav-link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero bg-info text-white text-center py-5">
        <Container>
          <h1 className="hero-heading">Welcome to My Portfolio</h1>
          <p className="hero-description">Creative solutions for your web and mobile needs</p>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="about py-5">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="mb-4 mb-md-0">
              <h2 className="about-heading">About Me</h2>
              <p className="about-text">
                I'm a passionate web developer with experience in building dynamic and
                responsive websites and applications. I specialize in front-end development,
                using React, HTML, CSS, and JavaScript to create beautiful, user-friendly interfaces.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <img
                src="https://via.placeholder.com/400"
                alt="Profile"
                className="img-fluid rounded-circle shadow profile-image"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio bg-light py-5">
        <Container>
          <h2 className="text-center portfolio-heading mb-4">My Work</h2>
          <Row>
            <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
              <Card className="custom-card">
                <Card.Img variant="top" src="https://via.placeholder.com/400x250" />
                <Card.Body>
                  <Card.Title className="project-title">Project One</Card.Title>
                  <Card.Text className="project-description">
                    Description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                  <Button variant="primary" className="project-button">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
              <Card className="custom-card">
                <Card.Img variant="top" src="https://via.placeholder.com/400x250" />
                <Card.Body>
                  <Card.Title className="project-title">Project Two</Card.Title>
                  <Card.Text className="project-description">
                    Description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                  <Button variant="primary" className="project-button">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
              <Card className="custom-card">
                <Card.Img variant="top" src="https://via.placeholder.com/400x250" />
                <Card.Body>
                  <Card.Title className="project-title">Project Three</Card.Title>
                  <Card.Text className="project-description">
                    Description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                  <Button variant="primary" className="project-button">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact py-5">
        <Container>
          <h2 className="text-center contact-heading mb-4">Contact Me</h2>
          <Row>
            <Col xs={12} md={6} className="mb-4">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
                </div>
                <Button variant="primary" type="submit" className="contact-submit-btn">
                  Submit
                </Button>
              </form>
            </Col>
            <Col xs={12} md={6}>
              <h4>Connect with me</h4>
              <p>
                You can also reach out to me through my social media platforms or email.
              </p>
              <ul className="list-unstyled">
                <li>Email: example@example.com</li>
                <li>LinkedIn: <a href="#">linkedin.com/in/username</a></li>
                <li>GitHub: <a href="#">github.com/username</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Portfolio;
