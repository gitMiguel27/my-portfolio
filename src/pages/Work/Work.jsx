import { Button, Card, Col, Container, Row } from "react-bootstrap"

function Work() {
  return (
    <Container id='work' className="d-flex align-items-center" style={{ minHeight: '100vh', scrollSnapAlign: 'center' }} >
      <Row style={{ width: '100%' }}>
        <Col xs={12} >
          <h1>Projects</h1>
        </Col>
        <Col x={12} >
          <Card>
            <Row>
              <Col md={6} >
                <Container style={{ height: '50vh' }} >
                  <Card.Img className="py-3" variant="top" src="/profile.jpeg" style={{ height: '50vh', objectFit: 'cover' }} />
                </Container>
              </Col>
              <Col md={6} >
                <Card.Body>
                  <Container className="p-0 d-flex justify-content-between" >
                    <Card.Title >Title</Card.Title>
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
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Work