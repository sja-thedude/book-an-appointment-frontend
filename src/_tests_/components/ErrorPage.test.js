import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/Store';
import ErrorPage from '../../components/landingPage/ErrorPage';

describe('Error Page', () => {
  it('renders correctly', () => {
    const tree = render(<Provider store={store}><Router><ErrorPage /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
