import { Col, Container, Image, Row } from "react-bootstrap"

function Hero() {
  return (
    <Container id='home' className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', scrollSnapAlign: 'center' }} >
      <Row>
        <Col md={7} >
          <h3>Hey, there!</h3>
          <h1>I&apos;m Miguel Nazario<br/> a Curious and Creative Software Engineer</h1>
          <h3>passionate in building user experiences<br/> with a focus on accessibility.</h3>
        </Col>
        <Col md={5} >
          <Image src="/profile.png" alt="profile pic" rounded style={{ height: '50vh' }} />
        </Col>
      </Row>
    </Container>
  )
}

export default Hero