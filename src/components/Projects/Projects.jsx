import { Button, Card, Col, Container, Row } from "react-bootstrap";
import projects from "../../data/projects.json";

function Projects() {
  return (
    <Col x={12}>
      {projects.map(project => {
        return (
          <Card key={project.id}>
            <Row>
              <Col md={6}>
                <Container style={{ height: "50vh" }}>
                  <Card.Img
                    className="py-3"
                    variant="top"
                    src="/profile.jpeg"
                    style={{ height: "50vh", objectFit: "cover" }}
                  />
                </Container>
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Container className="p-0 d-flex justify-content-between">
                    <Card.Title>{project.title}</Card.Title>
                    <div>
                      <Button style={{ backgroundColor: "#434975", borderColor: "#434975" }}>
                        <Card.Link style={{ textDecoration: "none", color: "white" }} href={project.link}>Link</Card.Link>
                      </Button>
                      <Button style={{ backgroundColor: "#434975", borderColor: "#434975" }}>
                        <Card.Link style={{ textDecoration: "none", color: "white" }} href={project.github}>Github</Card.Link>
                      </Button>
                    </div>
                  </Container>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Text>
                    {project.stack.map(tech => {
                      return(
                        <p key={tech}>{tech}</p>
                      )
                    })}
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        )
      })}
      {/* <Card>
        <Row>
          <Col md={6}>
            <Container style={{ height: "50vh" }}>
              <Card.Img
                className="py-3"
                variant="top"
                src="/profile.jpeg"
                style={{ height: "50vh", objectFit: "cover" }}
              />
            </Container>
          </Col>
          <Col md={6}>
            <Card.Body>
              <Container className="p-0 d-flex justify-content-between">
                <Card.Title>Title</Card.Title>
                <div>
                  <Button>Link</Button>
                  <Button>GitHub</Button>
                </div>
              </Container>
              <Card.Text>Description</Card.Text>
              <Card.Text>Tech Stack</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card> */}
    </Col>
  );
}

export default Projects;
