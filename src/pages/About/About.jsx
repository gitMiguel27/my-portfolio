import { Col, Container, Row } from "react-bootstrap"

function About() {
  return (
    <Container id='about' className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', scrollSnapAlign: 'center' }} >
        <h1>This is me...</h1>
        <Row>
          <Col md={12} lg={8} >
          <p>I am passionate in working on projects that value accessibility. Accessibility to me could mean anything from streamlining information that is otherwise difficult to find or understand all the way to building websites in multiple languages to reach a wider audience. Whether it&apos;s a website that shares recipes in English and Spanish, a guide to building a skincare routine, or a game that encourages people to visit underrated parts of NYC, I love thinking about how my projects will make an impact beyond its surface level.</p>
          <p>I bring a unique perspective that values curiosity. My background in Philosophy allows me to not only analyze dense amounts of information at a time, but also develop thoughtful solutions with a wholistic approach. It has also helped me think logicially about the code I write and how I can get from point A to point B in an efficient manner while problem-solving along the way.</p>
          <p>I also bring a creative side to programming. I possess entrenpreneurial qualities in terms of thinking about innovative ways to solve new and existing problems. I am passionate about photography, fashion, and design. This explains my minimalistic approach to the user interfaces I create and gravitate to.</p>
          </Col>
          <Col md={12} lg={4} >
            <Row>
              <Col xs={12} >
                <h3>Frontend Tools</h3>
              </Col>
              <Col>
                <h5>JavaScript(ES6+), React, Vite, HTML5, Git/GitHub.</h5>
              </Col>
            </Row>
            <Row>
              <Col xs={12} >
                <h3>Backend Tools</h3>
              </Col>
              <Col>
                <h5>MongoDB, Node.js, Express.js, Ruby on Rails, PostgreSQL.</h5>
              </Col>
            </Row>
            <Row>
              <Col xs={12} >
                <h3>UI Libraries</h3>
              </Col>
              <Col>
                <h5>CSS3, Bootstrap, Styled Components, Framer Motion, Material UI.</h5>
              </Col>
            </Row>
          </Col>
        </Row>
    </Container>
  )
}

export default About