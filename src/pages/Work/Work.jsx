import { Col, Container, Row } from "react-bootstrap"
import Projects from "../../components/Projects/Projects"
import { motion } from "motion/react"
import { useMediaQuery } from "@mui/material";

function Work() {
  const isDesktop = useMediaQuery('(min-width:600px)')

  const variants = isDesktop
  ? {
    initial: { opacity: 0, x: -500 },
    transition: { type: "spring", stiffness: 100, damping: 30 },
    whileInView: { opacity: 1, x:0 }
  }
  : {
    initial: { opacity: 0 },
    transition: { duration: 2 },
    whileInView: { opacity: 1 }
  }

  return (
    <Container id='work' className="d-flex align-items-center" style={{ minHeight: '100vh', scrollSnapAlign: 'center' }} >
      <Row style={{ width: '100%' }}>
        <Col xs={12} >
          <motion.h1
            variants={variants}
            initial={variants.initial}
            transition={variants.transition}
            whileInView={variants.whileInView}
            className="mt-5 pt-2"
          >Projects</motion.h1>
        </Col>
        <Projects/>
      </Row>
    </Container>
  )
}

export default Work