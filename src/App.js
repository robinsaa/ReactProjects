import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Entrypoint from "./components/Entrypoint";
import Home from "./components/Home";
import './App.css';
import Subpage1 from './components/Subpage1';
import Subpage2 from './components/Subpage2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Entrypoint/>}/>
        <Route path="/apps" element = {<Navigate replace to="/courses"/>}/>
        <Route path="/home" element = {<Home />}>
          <Route path="Subpage1" element = {<Subpage1 />}/>
          <Route path="Subpage2" element = {<Subpage2 />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
