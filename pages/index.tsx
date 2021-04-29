import type { NextPage } from 'next';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const IndexPage: NextPage = () => (
  <Jumbotron fluid className="home-jumbotron d-flex justify-content-center align-items-center page">
    <div className="item-container">
      <div className="hi-box text-left">
        <h1>Hi,</h1>
      </div>
      <div className="intro-box text-left">
        <h1>I&apos;m Jordan, </h1>
        <h1>a web developer</h1>
        <Button
          href="/contact"
          className="quick-links mt-2 mr-2 p-2"
          data-title="Contact Me Button"
        >
          CONTACT ME
        </Button>
        <Button
          href="/resume/resume.pdf"
          className="quick-links mt-2 mr-2 p-2 d-sm-none"
          data-title="Resume Button - Home Page"
        >
          RESUME
        </Button>
      </div>
    </div>
  </Jumbotron>
);

export default IndexPage;
