import { ChakraProvider } from "@chakra-ui/react";
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import ShowList from '../../components/ShowList';
import { shows } from '../api/mockedData';
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