import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/Store';
import LandingPage from '../../components/landingPage/LandingPage';

describe('Error Page', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><LandingPage /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
