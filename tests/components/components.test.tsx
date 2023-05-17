import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from 'react-query';
import ShowList from '../../components/ShowList';
import ShowItem from '../../components/ShowItem';
import { show, shows } from '../api/mockedData';
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ShowList tests', () => {
    let queryClient: QueryClient;
  beforeEach(() => {
    jest.resetAllMocks();
    queryClient = new QueryClient();
  })

  it('renders correct number of ShowItem components', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: shows });

    render(
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <ShowList shows={shows}/>
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
