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
            Hello! I'm a passionate **Data Analyst Apprentice** and **Full-Stack Web Developer** with a drive for turning complex data into actionable insights and building dynamic, user-friendly applications. My journey in tech is fueled by a love for problem-solving, whether it's optimizing a database or crafting a seamless user interface.
          </p>
          <p>
            When I'm not coding, I'm a dedicated **language enthusiast**, always seeking to understand new cultures through their words. This same curiosity and attention to detail also fuels my passion for football. As a proud fan of both **FC Barcelona** and **Manchester City**, I've learned the importance of teamwork, strategy, and continuous improvement—principles I apply to every project I undertake.
          </p>
          <p>
            I'm always eager to learn and grow, bringing a blend of technical expertise and a unique perspective to every challenge.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default About;