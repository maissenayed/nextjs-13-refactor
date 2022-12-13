'use client';

import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { moviesApi } from './store';

type Props = {
  children: React.ReactNode;
};

const ReduxWrapper = ({ children }: Props) => (
  <ApiProvider api={moviesApi}>{children}</ApiProvider>
);

export default ReduxWrapper;
