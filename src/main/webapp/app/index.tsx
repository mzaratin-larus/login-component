import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

import DevTools from './config/devtools';
import initStore from './config/store';
import setupAxiosInterceptors from './config/axios-interceptor';
import { clearAuthentication } from './shared/reducers/authentication';
import ErrorBoundary from './shared/error/error-boundary';
import AppComponent from './app';
import { loadIcons } from './config/icon-loader';

import { CreateElement } from 'create-component';

const devTools = process.env.NODE_ENV === 'development' ? <DevTools /> : null;

const store = initStore();

const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors(() => actions.clearAuthentication('login.error.unauthorized'));

loadIcons();

const rootEl = document.getElementById('root');

const componentToCreate = {
  align: 'vertical',
  element: [
    {
      type: 'input',
      text: '',
      id: 'username',
      name: 'name1',
      mandatory: true,
    },
    {
      type: 'password',
      text: '',
      id: 'password',
      name: 'name3',
      mandatory: true,
    },
    {
      type: 'checkbox',
      text: 'Remember me',
      id: 'remember',
      name: 'name4',
      mandatory: true,
    },
  ],
};

const handleElement = (event: any, id: string) => {};

const render = Component =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <ErrorBoundary>
      <Provider store={store}>
        <div>
          {/* If this slows down the app in dev disable it and enable when required  */}
          {devTools}
          <Component />
          <CreateElement componentToCreate={componentToCreate} onChangeElement={handleElement.bind(this)} />
        </div>
      </Provider>
    </ErrorBoundary>,
    rootEl
  );

render(AppComponent);
