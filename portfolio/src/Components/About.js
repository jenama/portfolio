// src/components/About.js
import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5">
      <h2 className="text-center mb-4">About Me</h2>
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <Image src="your-photo.jpg" roundedCircle fluid />
        </Col>
        <Col md={8}>
          <p>
            Hello! I'm a passionate web developer with a knack for building clean,
            user-friendly, and responsive websites. My journey in coding began with a curiosity
            about how things work, and it has evolved into a full-fledged passion for creating
            digital experiences.
          </p>
          <p>
            I specialize in the MERN stack and am always eager to learn new technologies.
            When I'm not coding, I enjoy hiking, playing video games, and exploring new coffee shops.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default About;