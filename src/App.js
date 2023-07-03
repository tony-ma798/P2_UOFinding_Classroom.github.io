import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import SignIn from './pages/sign-in';
import { useState } from 'react';
import AppContext from './AppContext';
import Siderbar from './components/Sidebar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Find from './pages/find-a-classroom';
import ClassRoom from './pages/classroom';
import MyCourses from './pages/my-courses';
import Libaries from './pages/libaries';

function App() {
  const [email, setEmail] = useState();
  const [siderOpen, setSiderOpen] = useState(false);

  return (
    <AppContext.Provider value={{ email, setEmail, siderOpen, setSiderOpen }}>
      <div className="App">
        <Router>
          <Navbar />
          <main className="main">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/sign-in" exact element={<SignIn />} />
              <Route path="/find-a-classroom" exact element={<Find />} />
              <Route path="/classroom" exact element={<ClassRoom />} />
              <Route path="/my-courses" exact element={<MyCourses />} />
              <Route path="/libaries" exact element={<Libaries />} />
            </Routes>
          </main>
          <Siderbar />
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
