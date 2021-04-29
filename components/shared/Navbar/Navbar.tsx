import { memo } from 'react';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavbarComponent() {
  return (
    <Navbar className="navbar p-0" collapseOnSelect fixed="top" variant="dark" expand="md">
      <Link passHref href="/">
        <Navbar.Brand className="mr-md-5 mr-0" data-title="Logo">
          <span className="p-3">Jordan Barbosa</span>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="p-2">
        MENU <i className="fas fa-bars" />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav fill>
          <Nav.Item>
            <Link passHref href="/">
              <Nav.Link className="nav-link">HOME</Nav.Link>
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link passHref href="/about">
              <Nav.Link className="nav-link">ABOUT</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link passHref href="/projects">
              <Nav.Link className="nav-link">PROJECTS</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link passHref href="/contact">
              <Nav.Link className="nav-link">CONTACT</Nav.Link>
            </Link>
          </Nav.Item>
        </Nav>

        <Nav className="ml-auto social-links d-flex flex-row justify-content-center pr-2">
          <Link passHref href="https://github.com/jordanjordanb1/">
            <Nav.Link data-title="Github Link">
              <i className="fab fa-github mt-2" />
            </Nav.Link>
          </Link>

          <Link passHref href="https://gitlab.com/jordansbarbosa01">
            <Nav.Link data-title="Github Link">
              <i className="fab fa-gitlab mt-2" />
            </Nav.Link>
          </Link>

          <Link passHref href="https://www.linkedin.com/in/jordan-barbosa/">
            <Nav.Link data-title="LinkedIn Link">
              <i className="fab fa-linkedin mt-2" />
            </Nav.Link>
          </Link>

          <Nav.Link
            href="mailto: jordansbarbosa01@gmail.com?subject=Contact from your website"
            rel="noopener"
            data-title="Email Link"
          >
            <i className="far fa-envelope mt-2" />
          </Nav.Link>

          <Link passHref href="/resume/resume.pdf">
            <Nav.Link data-title="Resume Link - Navbar">
              <Button className="p-1 px-2 resume-button">RESUME</Button>
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default memo(NavbarComponent);
