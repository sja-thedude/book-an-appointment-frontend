import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/Store';
import DetailReservation from '../../components/dashboard/DetailReservation';

describe('DetailReservation', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><DetailReservation /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
