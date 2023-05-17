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


describe('ShowList', () => {
    let queryClient: QueryClient;

    beforeEach(() => {
      queryClient = new QueryClient();
      render(
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <Filter handleFilterChange={undefined} selectedFilter={'all'} />
            <ShowList shows={shows} />
          </ChakraProvider>
        </QueryClientProvider>
      );
    });
  
    it('filters shows by type', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: shows });
      const filterSelect = screen.getByTestId('filter-select');
  
      // Change filter to 'movie'
      fireEvent.change(filterSelect, { target: { value: 'movie' } });
  
      // After the filter has been changed to 'movie', only shows of type 'movie' should be rendered
      const showItems = screen.getAllByTestId('show-item');
      const movieItems = shows.filter(show => show.type === 'movie');
      expect(showItems.length).toBe(movieItems.length);
  
      // Change filter to 'tvShow'
      fireEvent.change(filterSelect, { target: { value: 'tvShow' } });
  
      // After the filter has been changed to 'tvShow', only shows of type 'tvShow' should be rendered
      const tvShowItems = shows.filter(show => show.type === 'tvShow');
      expect(showItems.length).toBe(tvShowItems.length);
    });
  });
