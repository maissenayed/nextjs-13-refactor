'use client';

import useSWR, { SWRConfig } from 'swr';

type Props = {
  children: React.ReactNode;
};

const SwrQueryWrapper = ({ children }: Props) => (
  <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>
);

export default SwrQueryWrapper;
