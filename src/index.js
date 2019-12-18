import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store/createStore';
import * as serviceWorker from './serviceWorker';
import { saveState } from './_core/localStorage';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';

const resources = {
  en: require('./en.json'),
  ar: require('./ar.json')
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    keySeparator: '.',
    interpolation: {
      escapeValue: false
    }
  })
  .then(() => {
    console.log('heeeeeere :((');

    store.subscribe(() => {
      saveState({
        user: store.getState().user
      });
    });
    ReactDOM.render(
      <I18nextProvider i18n={i18n}>
        <App store={store} />
      </I18nextProvider>,
      document.getElementById('root')
    );

    serviceWorker.unregister();
  });
