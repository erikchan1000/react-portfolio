import logo from './logo.svg';
import './App.scss';
import Layout from './components/Layout';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/portfolio" exact element={<Contact/>} />
        </Route>
        
      </Switch>
    </>
  );
}

export default App;
