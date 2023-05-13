import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Image src="Ru.jpg" roundedCircle fluid />
        </Col>
        <Col md={6}>
          <h1>About Me</h1>
          <p>Hi, my name is <strong>Rupam Gupta</strong> and I'm a web developer based in Gujarat. I am good in Node and have experience working on multiple projects.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default About