import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/Store';
import BookAppointment from '../../components/dashboard/BookAppointment';

describe('BookAppointment', () => {
  it('renders correctly', () => {
    window.localStorage.setItem('bookDoctorUser', 1);
    const tree = render(<Provider store={store}><Router><BookAppointment /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
