import './App.css';
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Nav,
  Portfolio,
  Services,
  Testimonials,
} from './components';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
