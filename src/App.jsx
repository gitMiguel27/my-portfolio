import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
