import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/Store';
import Reservations from '../../components/dashboard/Reservations';

describe('Reservations', () => {
  it('renders correctly', () => {
    window.localStorage.setItem('bookDoctorUser', 1);
    const tree = render(<Provider store={store}><Router><Reservations /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
