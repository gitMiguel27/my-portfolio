import { Button, Card, Col, Container, Row } from "react-bootstrap"

function Work() {
  return (
    <Container id='work' style={{ height: '100vh', scrollSnapAlign: 'center', scrollMarginTop: '100px' }} >
      <h1>Projects</h1>
      <Card>
        <Row>
          <Col md={6} >
            <Container style={{ height: '50vh' }} >
              <Card.Img className="py-3" variant="top" src="/profile.jpeg" style={{ height: '50vh', objectFit: 'cover' }} />
            </Container>
          </Col>
          <Col md={6} >
            <Card.Body>
              <Row>
                <Col xs={7} md={6} lg={7} >
                  <Card.Title>Title</Card.Title>
                </Col>
                <Col xs={5} md={6} lg={5} >
                  <Button>Link</Button>
                  <Button>GitHub</Button>
                </Col>
              </Row>
              <Card.Text>description</Card.Text>
              <Card.Text>Tech Stack</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default Work