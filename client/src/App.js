import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';

import Home from './pages/home/Home.js';
import Faculty from './pages/faculty/Faculty.js';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/faculty' element={<Faculty />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
