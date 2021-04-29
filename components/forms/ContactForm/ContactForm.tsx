import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import Label from 'react-bootstrap/FormLabel';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState();
  const [formMsg, setFormMsg] = useState('');

  const ContactSchema = Yup.object().shape({
    contact: Yup.object().shape({
      name: Yup.string()
        .min(3, 'Name is not valid')
        .max(25, 'Name is not valid')
        .required('Name is required'),
      email: Yup.string().email('Email is not valid').required('Email is required'),
      message: Yup.string()
        .min(3, 'Message is not valid')
        .max(250, 'Message is too long')
        .required('Message is required'),
    }),
  });

  return (
    <Formik
      initialValues={{
        contact: {
          name: '',
          email: '',
          message: '',
        },
      }}
      validationSchema={ContactSchema}
      onSubmit={async ({ contact }, { setSubmitting }) => {
        setSubmitting(true);

        await axios.post('/api/contact', contact).then(({ data }) => {
          if (data.success) {
            // @ts-ignore
            setFormStatus(true);
            setFormMsg('Message sent successfully');
            setTimeout(() => {
              // history.push('/');
            }, 1000);
            return true;
          }

          // @ts-ignore
          setFormStatus(false);
          setFormMsg('An unknown error occured');
          return false;
        });

        setSubmitting(false);
      }}
    >
      {({ isSubmitting, resetForm }) => (
        <Form>
          <Row className="mb-2">
            <Col xs="12" md={{ span: 10, offset: 1 }}>
              {formMsg &&
                (formStatus ? (
                  <Alert className="mb-2 form-success text-center">{formMsg}</Alert>
                ) : (
                  <Alert className="mb-2 form-error text-center">{formMsg}</Alert>
                ))}

              {/* === NAME === */}
              <FormGroup>
                <ErrorMessage name="contact.name">
                  {(msg) => (
                    <Alert className="mb-1 form-error text-center" variant="danger">
                      {msg}
                    </Alert>
                  )}
                </ErrorMessage>

                <Label htmlFor="contact.name">Name</Label>
                <Field
                  className="form-control"
                  disabled={isSubmitting}
                  type="text"
                  name="contact.name"
                />
              </FormGroup>

              {/* === EMAIL === */}
              <FormGroup>
                <ErrorMessage name="contact.email">
                  {(msg) => (
                    <Alert className="mb-1 form-error text-center" variant="danger">
                      {msg}
                    </Alert>
                  )}
                </ErrorMessage>

                <Label htmlFor="contact.email">Email</Label>
                <Field
                  className="form-control"
                  disabled={isSubmitting}
                  type="email"
                  name="contact.email"
                />
              </FormGroup>

              {/* === MESSAGE === */}
              <FormGroup>
                <ErrorMessage name="contact.message">
                  {(msg) => (
                    <Alert className="mb-1 form-error text-center" variant="danger">
                      {msg}
                    </Alert>
                  )}
                </ErrorMessage>

                <Label htmlFor="contact.message">Message</Label>
                <Field
                  className="form-control"
                  disabled={isSubmitting}
                  name="contact.message"
                  component="textarea"
                />
              </FormGroup>

              <FormGroup>
                <ButtonGroup className="login-buttons home-buttons">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                  </Button>
                  <Button
                    disabled={isSubmitting}
                    onClick={() => {
                      resetForm();
                    }}
                  >
                    RESET
                  </Button>
                </ButtonGroup>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
