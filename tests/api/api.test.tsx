import React, { ReactNode } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useMarvelShowsQuery, useMarvelShowQuery } from '../../api/api';
import { show, shows } from './mockedData';

describe('API tests', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    jest.resetAllMocks();
    jest.useRealTimers();
    queryClient = new QueryClient();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('returns data when useMarvelShowsQuery is called', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(shows),
    });

    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useMarvelShowsQuery(), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toBeDefined();
    expect(result.current.data.length).toBeGreaterThan(0);
    expect(result.current.data.length).toEqual(2);
  });

  it('returns empty array when useMarvelShowsQuery is called and there is no data', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([]),
    });

    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useMarvelShowsQuery(), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toBeDefined();
    expect(result.current.data.length).toEqual(0);
  });

  it.skip('returns error when useMarvelShowsQuery is called and there is a problem', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    });

    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useMarvelShowsQuery(), { wrapper });

    await waitFor(() => result.current.isError, { timeout: 5000 });

    expect(result.current.error).toBeDefined();
  });

  it('returns data when useMarvelShowQuery is called with an id', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(show),
    });

    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useMarvelShowQuery(1), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toBeDefined();
  });

  it.skip('returns error when useMarvelShowQuery is called and there is a problem', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    });

    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useMarvelShowQuery(1), { wrapper });
    await waitFor(() => result.current.isError, { timeout: 5000 });

    expect(result.current.error).toBeDefined();
  });
});

