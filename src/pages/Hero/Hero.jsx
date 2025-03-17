import { Col, Container, Image, Row } from "react-bootstrap"
import { motion } from "motion/react"

function Hero() {
  return (
    <Container id='home' className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', scrollSnapAlign: 'center' }} >
      <Row>
        <Col md={7} >
          <motion.h3 
            initial={{ opacity: 0, x: -500 }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            whileInView={{ opacity: 1, x:0 }}
            >Hey, there!</motion.h3>
          <motion.h1 
            initial={{ opacity: 0, x: -500 }}
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
            whileInView={{ opacity: 1, x:0 }}
            >I&apos;m Miguel Nazario<br/> a Curious and Creative Software Engineer</motion.h1>
          <motion.h3 
            initial={{ opacity: 0, x: -500 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            whileInView={{ opacity: 1, x:0 }}
            >passionate in building user experiences<br/> with a focus on accessibility.</motion.h3>
        </Col>
        <Col md={5} >
          <Image src="/profile.png" alt="profile pic" rounded style={{ height: '50vh' }} />
        </Col>
      </Row>
    </Container>
  )
}

export default Hero