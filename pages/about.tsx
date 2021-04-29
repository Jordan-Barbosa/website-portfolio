import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  return (
    <>
      <Jumbotron fluid className="page d-flex align-items-center">
        <Container fluid>
          <Row>
            <Col xs="12" md="9" lg="7" className="about-container">
              <Row>
                <Col xs="12">
                  <h1 className="text-center mt-2 mb-4">About me</h1>
                </Col>
              </Row>

              <Row>
                <Col xs="12">
                  <p className="about-paragraph">
                    My name is Jordan Barbosa, and I have been programming since I was about 14
                    years old. I started off learning HTML and PHP (strange right?!), but soon after
                    started to learn JavaScript. I hated JavaScript, then I quickly learned jQuery,
                    and that made JavaScript a little better.
                  </p>

                  <p className="about-paragraph">
                    Now with the rise of other more advanced frameworks and libraries, I started to
                    move into the Angular side, but quickly changed to React. I now focus on Reactjs
                    (and Redux for state managment) with TypeScript. With the backend I focus on
                    NodeJS to keep everything JavaScript (I love it now ¯\_(ツ)_/¯) I love to
                    problem solve, and to find better ways to do current things.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}
