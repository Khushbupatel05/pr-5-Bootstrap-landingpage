
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Benefits from './Components/Benefits';
import Chapter from './Components/Chapter';
import Sectionheading from './Components/Sectionheading';

const App = () => {
  return (
    <>
    <Header/>
    <Home />
    <Sectionheading />
    <Benefits/>
    <Chapter />
    </>
  )
}

export default App