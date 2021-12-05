import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import ShowUser from './components/users/ShowUser';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <div className='container py-4'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/users/add' element={<AddUser />} />
            <Route exact path='/users/edit/:id' element={<EditUser />} />
            <Route exact path='/users/show/:id' element={<ShowUser />} />
            <Route exact path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
