import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbars from './partials/Navbars'
import Footer from './partials/Footer'
import Home from './components/Home';
import Request from './components/Request';
import Report from './components/Report';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column vh-100">
        <Navbars />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/request" element={<Request />} />
          <Route exact path="/report" element={<Report />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
