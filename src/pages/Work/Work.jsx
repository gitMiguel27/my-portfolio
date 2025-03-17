import { Col, Container, Row } from "react-bootstrap"
import Projects from "../../components/Projects/Projects"
import { motion } from "motion/react"


function Work() {
  return (
    <Container id='work' className="d-flex align-items-center" style={{ minHeight: '100vh', scrollSnapAlign: 'center' }} >
      <Row style={{ width: '100%' }}>
        <Col xs={12} >
          <motion.h1
            initial={{ opacity: 0, x: -500 }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            whileInView={{ opacity: 1, x:0 }}
          >Projects</motion.h1>
        </Col>
        <Projects/>
      </Row>
    </Container>
  )
}

export default Work