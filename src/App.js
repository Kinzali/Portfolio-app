import './index.css';
import Footer from './components/FooterComponent';
import Header from './components/HearderComponent';
import Skills from './components/Skills';
// import Projects from './components/Projects';
import FeaturedResources from './components/FeatureComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <FeaturedResources />
      <Footer />
    </div>
  );
}

export default App;
