import React, { Fragment } from 'react';

import Header from './components/Header';
import Elders from './components/Elders';
import { Outlet } from 'react-router';

const App = () => {
  return (
    <Fragment>
        <Header />
        <Outlet />
    </Fragment>
  );
};

export default App;
