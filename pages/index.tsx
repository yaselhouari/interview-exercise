import React, { useEffect, useState } from 'react';
import { useMarvelShowsQuery } from '../api/api';
import ShowList from '../components/ShowList';
import Filter from '../components/Filter';
import Layout from '../components/Layout';
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [shows, setShows] = useState()
  const handleFilterChange = (event) => {
    event.target.value === 'all'? setFilter('all') :
    setFilter(event.target.value);
    setLoading(true);
    setShows(undefined);
  };
  const {isLoading, data, error} = useMarvelShowsQuery(filter);
  useEffect(() => {
    if(data) {
      setShows(data);
      setLoading(false);
    }
  }, [isLoading, data, error, filter])
  return <Layout>
    <Filter handleFilterChange={handleFilterChange} selectedFilter={filter} />
    <ShowList shows={shows} loading={loading}/></Layout>
};

export default Home;

