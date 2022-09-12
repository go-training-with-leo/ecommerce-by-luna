import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Demo from 'pages/Demo/index';
import Form from 'pages/Form/index';
import Header from 'components/Header/index';
// import Search from 'components/Search/index';

import 'services/i18n';

import 'App.scss';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/demo' element={<Demo />} />
        <Route exact path='/form' element={<Form />} />
        <Route exact path='/' element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
