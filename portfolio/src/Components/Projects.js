// src/components/Projects.js
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of your first project. Mention the technologies used and what it does.',
    link: '#', // Replace with your project URL
    image: 'https://via.placeholder.com/400x250'
  },
  {
    title: 'Project Two',
    description: 'A brief description of your second project. Mention the technologies used and what it does.',
    link: '#', // Replace with your project URL
    image: 'https://via.placeholder.com/400x250'
  },
  {
    title: 'Project Three',
    description: 'A brief description of your third project. Mention the technologies used and what it does.',
    link: '#', // Replace with your project URL
    image: 'https://via.placeholder.com/400x250'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={project.image} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  {project.description}
                </Card.Text>
                <Button variant="primary" href={project.link} target="_blank" className="mt-auto">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Projects;