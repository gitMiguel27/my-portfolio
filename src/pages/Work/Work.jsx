import { Col, Container, Row } from "react-bootstrap"
import Projects from "../../components/Projects/Projects"

function Work() {
  return (
    <Container id='work' className="d-flex align-items-center" style={{ minHeight: '100vh', scrollSnapAlign: 'center' }} >
      <Row style={{ width: '100%' }}>
        <Col xs={12} >
          <h1>Projects</h1>
        </Col>
        <Projects/>
      </Row>
    </Container>
  )
}

export default Work