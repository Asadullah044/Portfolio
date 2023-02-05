
import './App.css';
import Header from './components/Header/Header.js';
import Hero from './components/Hero/Hero.js';
import Experties from  './components/Experties/Experties.js';
import Contacts from './components/Contacts/Contacts.js';
import Footer from './components/Footer/Footer.js';
import Projects from './components/Projects/Projects.js';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Experties />
      <Projects />
      <Contacts /> 
      <Footer />
    </div>
  );
}

export default App;
