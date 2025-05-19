import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Features from './components/features';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
