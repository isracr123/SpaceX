import React from 'react';
import CreateLink from './CreateLink';
import Header from './Header';
import LinkList from './LinkList';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import SpaceX from './SpaceX';
import LandingPage from './LandingPage';

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="justify-center bg-white">
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route
            path="/spacex"
            element={<SpaceX/>}
          />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;