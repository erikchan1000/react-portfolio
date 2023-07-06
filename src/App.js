import logo from './logo.svg';
import './App.scss';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Contact/>} />
          <Route path="/work" element={<Work/>}/>
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
