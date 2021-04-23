import React from 'react';

const LoadingContext = React.createContext({
  loading: false,
  showLoading: () => {},
  hideLoading: () => {},
});

export default LoadingContext;
