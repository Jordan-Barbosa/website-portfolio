import type { CustomAppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/main.scss';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { useStore } from '@hooks';
import { Hydrate } from 'react-query/hydration';
import { useRef } from 'react';
import { Main } from '@layouts';

function App({ Component, pageProps }: CustomAppProps) {
  const store = useStore(pageProps.initialReduxState);
  const Layout = Component?.Layout || Main;

  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <Layout>
            <>
              <Component {...pageProps} />
              <ReactQueryDevtools />
            </>
          </Layout>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
