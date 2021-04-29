import Container from 'react-bootstrap/Container';
import { memo } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col xs="12">Footer</Col>
      </Row>
    </Container>
  );
}

export default memo(Footer);
