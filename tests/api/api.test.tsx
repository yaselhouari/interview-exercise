import React, {ReactNode} from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useMarvelShowsQuery, useMarvelShowQuery } from '../../api/api';
import mockAxios from 'jest-mock-axios';

mockAxios.get.mockImplementation((url) => {
  switch (url) {
    case '/api/marvel/shows':
      return Promise.resolve({ data: [
        {
          type: "movie",
          id: 1,
          title: "Iron Man",
          release_date: "2008-05-02",
          box_office: "585171547",
          duration: 126,
          overview:
            "2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
          cover_url:
            "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/iron-man.jpg",
          trailer_url:
            "https://players.brightcove.net/5359769168001/BJemW31x6g_default/index.html?videoId=5786306590001",
          directed_by: "Jon Favreau",
          phase: 1,
          saga: "Infinity Saga",
          chronology: 3,
          post_credit_scenes: 1,
          imdb_id: "tt0371746",
        },
        {
          type: "movie",
          id: 2,
          title: "The Incredible Hulk",
          release_date: "2008-06-13",
          box_office: "265573859",
          duration: 112,
          overview:
            "In this new beginning, scientist Bruce Banner desperately hunts for a cure to the gamma radiation that poisoned his cells and unleashes the unbridled force of rage within him: The Hulk. Living in the shadows--cut off from a life he knew and the woman he loves, Betty Ross--Banner struggles to avoid the obsessive pursuit of his nemesis, General Thunderbolt Ross and the military machinery that seeks to capture him and brutally exploit his power. As all three grapple with the secrets that led to the Hulk's creation, they are confronted with a monstrous new adversary known as the Abomination, whose destructive strength exceeds even the Hulk's own. One scientist must make an agonizing final choice: accept a peaceful life as Bruce Banner or find heroism in the creature he holds inside--The Incredible Hulk.",
          cover_url:
            "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/hulk.jpg",
          trailer_url:
            "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5786823800001",
          directed_by: "Louis Leterrier",
          phase: 1,
          saga: "Infinity Saga",
          chronology: 5,
          post_credit_scenes: 1,
          imdb_id: "tt0800080",
        }]});
    case '/api/marvel/shows/1':
      return Promise.resolve({ data: {"type":"movie","id":1,"title":"Iron Man","release_date":"2008-05-02","box_office":"585171547","duration":126,"overview":"2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.","cover_url":"https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/iron-man.jpg","trailer_url":"https://players.brightcove.net/5359769168001/BJemW31x6g_default/index.html?videoId=5786306590001","directed_by":"Jon Favreau","phase":1,"saga":"Infinity Saga","chronology":3,"post_credit_scenes":1,"imdb_id":"tt0371746"}});
    default:
      return Promise.reject(new Error('not found'));
  }
});
//mocking axio results:

const queryClient = new QueryClient();

describe('API tests', () => {
  it('returns data when useMarvelShowsQuery is called', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useMarvelShowsQuery(), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toBeDefined();
    expect(result.current.data.length).toBeGreaterThan(0);
  });

  it.skip('returns empty array when useMarvelShowsQuery is called and there is no data', async () => {
    jest.mock('../../api/api', () => ({
      fetchShows: jest.fn().mockResolvedValue([])
    }));

    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useMarvelShowsQuery(), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toBeDefined();
    expect(result.current.data.length).toEqual(0);
  });

  it.skip('returns error when useMarvelShowsQuery is called and there is a problem', async () => {
    // Mock API call to throw error
    jest.mock('../../api/api', () => ({
      fetchShows: jest.fn().mockRejectedValue(new Error('API error'))
    }));

    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useMarvelShowsQuery(), { wrapper });

    await waitFor(() => result.current.isError);

    expect(result.current.error).toBeDefined();
  });

  it.skip('returns data when useMarvelShowQuery is called with an id', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useMarvelShowQuery(1), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toBeDefined();
  });

  it.skip('returns error when useMarvelShowQuery is called and there is a problem', async () => {
    // Mock API call to throw error
    jest.mock('../../api/api', () => ({
      fetchShow: jest.fn().mockRejectedValue(new Error('API error'))
    }));

    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useMarvelShowQuery(1), { wrapper });

    await waitFor(() => result.current.isError);

    expect(result.current.error).toBeDefined();
  });
});
