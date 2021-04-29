import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from '@components/forms/ContactForm';

export default function Contact() {
  return (
    <Jumbotron fluid className="page">
      <Container fluid>
        <Row>
          <Col
            xs="12"
            md={{ span: 8, offset: 2 }}
            lg={{ span: 4, offset: 4 }}
            className="contact mt-3 mt-md-0"
          >
            <Row>
              <Col className="text-center">
                <h1>Contact me</h1>
              </Col>
            </Row>

            <hr />

            <Row noGutters>
              <Col xs="12" md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                <ContactForm />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
