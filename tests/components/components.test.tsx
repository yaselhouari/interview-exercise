import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from 'react-query';
import ShowList from '../../components/ShowList';
import ShowItem from '../../components/ShowItem';
import { show, shows } from '../api/mockedData';
import {Filter} from '../../pages/index';
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ShowList', () => {
    let queryClient: QueryClient;
  beforeEach(() => {
    jest.resetAllMocks();
    queryClient = new QueryClient();
  })

  it('renders loading at that loading phase', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: shows });

    render(
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <ShowList shows={shows} loading={true}/>
        </ChakraProvider>
      </QueryClientProvider>
    );

    await waitFor(() => expect(screen.getByText('Loading...')).toBeInTheDocument());
  });
  it('renders correct number of ShowItem components', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: shows });

    render(
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <ShowList shows={shows} loading={false}/>
        </ChakraProvider>
      </QueryClientProvider>
    );

    await waitFor(() => expect(screen.getAllByTestId('show-item')).toHaveLength(shows.length));
  });
});

describe('ShowItem tests', () => {
  it('displays the correct show data', () => {
    const { getByText } = render(
      <ChakraProvider>
        <ShowItem show={show} />
      </ChakraProvider>
    );

    expect(getByText(show.title)).toBeInTheDocument();
  });
}); 