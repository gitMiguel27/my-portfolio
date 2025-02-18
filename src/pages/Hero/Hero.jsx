import { Container } from "react-bootstrap"

function Hero() {
  return (
    <Container id='hero' className="my-5" style={{ minHeight: '100vh' }}>
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