import { Container } from "react-bootstrap"

function Hero() {
  return (
    <Container id='home' style={{ height: '100vh', scrollSnapAlign: 'center', scrollMarginTop: '100px' }} >
      <h3>
        Curious and Creative
      </h3>
      <h3>
        Software Engineer
      </h3>
      <h3>
        Specializing in Front-End Web Development
      </h3>
    </Container>
  )
}

export default Hero