import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import SingIn from '@pages/SingIn';
import SignUp from '@pages/SignUp';

const App = () => {
  const InitialState = useInitialState();
  return (
    <AppContext.Provider value={InitialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/singin" element={<SingIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
    
  );
}

export default App;
