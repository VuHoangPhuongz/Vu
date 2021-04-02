import React from 'react';
import CoronaApp from './pages/corona';
import { Provider } from 'react-redux';
import configStore from './store/index';

const { store } = configStore();

const CoronaVirus = () => {
  return (
    <Provider store={store}>
      <CoronaApp/>
    </Provider>
  )
}
export default CoronaVirus;