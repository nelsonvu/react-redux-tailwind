import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Layout } from '@frontend/modules/layout';
import { Fallback } from '@frontend/modules/fallback';
import { AuthProvider } from '@frontend/modules/auth';

import { store } from '@frontend/redux-store';

import { Routes } from './react-routes/routes';

import './index.css';
import './App.css';

export default function App() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const pages = import.meta.glob('./pages/**/!(*.test.[jt]sx)*.([jt]sx)');
  for (const page in pages) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    pages[page] = React.lazy(pages[page]);
  }

  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<Fallback />}>
              <Routes pages={pages} />
            </Suspense>
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}
