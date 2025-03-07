import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import Hero from './pages/Hero/Hero'
import About from './pages/About/About'
import Work from './pages/Work/Work'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div id='app'>
      <Header />
      <Hero />
      <Work />
      <About />
      <Footer />
    </div>
  )
}

export default App
