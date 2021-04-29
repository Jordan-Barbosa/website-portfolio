import type { ReactNode } from 'react';

import Head from 'next/head';
import { Navbar } from '@components/shared';

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = 'Portfolio | Jordan Barbosa' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
