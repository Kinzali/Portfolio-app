import './index.css';
import Footer from './components/FooterComponent';
import Header from './components/HearderComponent';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
