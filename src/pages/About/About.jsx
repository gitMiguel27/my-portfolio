import { Col, Container, Row } from "react-bootstrap"
import { motion } from "motion/react"

function About() {
  return (
    <Container id='about' className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', scrollSnapAlign: 'center' }} >
        <Row>
          <motion.h1
            initial={{ opacity: 0, x: -500 }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >This is me...</motion.h1>
          <Col md={12} lg={8} >
          <motion.p
            initial={{ opacity: 0, x: -500 }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >I am passionate in working on projects that value accessibility. Accessibility to me could mean anything from streamlining information that is otherwise difficult to find or understand all the way to building websites in multiple languages to reach a wider audience. Whether it&apos;s a website that shares recipes in English and Spanish, a guide to building a skincare routine, or a game that encourages people to visit underrated parts of NYC, I love thinking about how my projects will make an impact beyond its surface level.</motion.p>
          <motion.p
            initial={{ opacity: 0, x: -500 }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >I bring a unique perspective that values curiosity. My background in Philosophy allows me to not only analyze dense amounts of information at a time, but also develop thoughtful solutions with a wholistic approach. It has also helped me think logicially about the code I write and how I can get from point A to point B in an efficient manner while problem-solving along the way.</motion.p>
          <motion.p
            initial={{ opacity: 0, x: -500 }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >I also bring a creative side to programming. I possess entrenpreneurial qualities in terms of thinking about innovative ways to solve new and existing problems. I am passionate about photography, fashion, and design. This explains my minimalistic approach to the user interfaces I create and gravitate to.</motion.p>
          </Col>
          <Col md={12} lg={4} >
            <Row>
              <Col xs={12} >
                <motion.h3
                  initial={{ opacity: 0 }}
                  transition={{ duration: 2.5 }}
                  whileInView={{ opacity: 1 }}
                >Frontend Tools</motion.h3>
              </Col>
              <Col>
                <motion.h5
                  initial={{ opacity: 0 }}
                  transition={{ duration: 2.5 }}
                  whileInView={{ opacity: 1 }}
                >JavaScript(ES6+), React, Vite, HTML5, Git/GitHub</motion.h5>
              </Col>
            </Row>
            <Row>
              <Col xs={12} >
                <motion.h3
                  initial={{ opacity: 0 }}
                  transition={{ duration: 2.5 }}
                  whileInView={{ opacity: 1 }}
                >Backend Tools</motion.h3>
              </Col>
              <Col>
                <motion.h5
                  initial={{ opacity: 0 }}
                  transition={{ duration: 2.5 }}
                  whileInView={{ opacity: 1 }}
                >MongoDB, Node.js, Express.js, Ruby on Rails, PostgreSQL</motion.h5>
              </Col>
            </Row>
            <Row>
              <Col xs={12} >
                <motion.h3
                  initial={{ opacity: 0 }}
                  transition={{ duration: 2.5 }}
                  whileInView={{ opacity: 1 }}
                >UI Libraries</motion.h3>
              </Col>
              <Col>
                <motion.h5
                  initial={{ opacity: 0 }}
                  transition={{ duration: 2.5 }}
                  whileInView={{ opacity: 1 }}
                >CSS3, Bootstrap, Styled Components, Framer Motion, Material UI</motion.h5>
              </Col>
            </Row>
          </Col>
        </Row>
    </Container>
  )
}

export default About