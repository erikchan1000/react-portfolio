import logo from './logo.svg';
import './App.scss';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Layout/>} >
          <Route path="/" element={<Home/>} />
        </Route>
        <Route path="/about" exact element={<About/>} />
        <Route path="/portfolio" exact element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
