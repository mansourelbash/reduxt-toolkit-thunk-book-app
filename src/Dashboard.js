import React, { Fragment } from 'react';

import Header from './components/Header';
import Container from './components/Container';
import AddForm from './components/AddForm';
import BookContainer from './components/Book/BookContainer';
import Items from './components/Items';

const Dashboard = () => {
  return (
    <Fragment>
      <Container>
        <AddForm />
        <BookContainer />
      </Container>
    </Fragment>
  );
};

export default Dashboard;
