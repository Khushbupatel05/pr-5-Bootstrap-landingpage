
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Benefits from './Components/Benefits';
import Chapter from './Components/Chapter';
import Sectionheading from './Components/Sectionheading';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
    <Header/>
    <Home />
    <Sectionheading />
    <Benefits/>
    <Chapter />
    <Contact /> 
    <Footer />
    </>
  )
}

export default App;