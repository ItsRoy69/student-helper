import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';

import Home from './pages/Home.js';
import Faculty from './pages/Faculty.js';
import Events from './pages/Events.js';
import Notes from './pages/notes/Notes.js';
import Canteen from './pages/Canteen.js';
import Clubs from './pages/Clubs.js';
import Campus from './pages/Campus.js';
import Contact from './pages/Contact.js';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/faculty' element={<Faculty />} />
          <Route exact path='/events' element={<Events />} />
          <Route exact path='/notes' element={<Notes />} />
          <Route exact path='/canteen' element={<Canteen />} />
          <Route exact path='/clubs' element={<Clubs />} />
          <Route exact path='/campus' element={<Campus />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
