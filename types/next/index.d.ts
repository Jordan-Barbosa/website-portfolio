import { AppProps } from 'next/app';

import { NextComponentType, NextPageContext } from 'next';

declare module 'next/app' {
  export interface CustomAppProps extends AppProps {
    Component: NextComponentType<NextPageContext, any, {}> & {
      Layout?: NextComponentType<NextPageContext, any, {}>;
    };
  }
}
