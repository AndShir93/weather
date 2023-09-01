import React from 'react';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { createRoot } from 'react-dom/client';


const renderApp = () => {
  const container = document.getElementById('root');
  const root = createRoot(container!);
  root.render(
    <Provider store={store}>
      <App/>
    </Provider>
  );
};

renderApp();
