
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Benefits from './Components/Benefits';
import Chapter from './Components/Chapter';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ContactMe from './Components/ContactMe';
import TestimonialSlider from './Components/TestimonialSlider';

const App = () => {
  return (
    <>
    <Header/>
    <Home />
    <Benefits/>
    <Chapter />
    <TestimonialSlider />
    <ContactMe />
    <Contact /> 
    <Footer />
    </>
  )
}

export default App;