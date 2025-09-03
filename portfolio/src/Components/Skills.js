// src/components/Skills.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express',
  'SQL', 'R', 'Git', 'Bootstrap', 'Sass', 'Google Sheets', 'Gemini'
];

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <h2 className="text-center mb-4">My Skills</h2>
      <Row className="justify-content-center">
        {skills.map((skill, index) => (
          <Col xs={6} sm={4} md={3} lg={2} key={index} className="text-center mb-3">
            <div className="p-3 border rounded shadow-sm h-100 d-flex align-items-center justify-content-center">
              {skill}
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Skills;