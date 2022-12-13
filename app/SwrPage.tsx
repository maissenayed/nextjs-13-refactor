'use client';

import React from 'react';
import Link from 'next/link';
// Fetch hook
import { useFetchMoviesSwr } from '../api/fetchHooks';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import Header from '../components/Header/Header';

import Grid from '../components/Grid/Grid';
import Card from '../components/Card/Card';
import Spinner from '../components/Spinner/Spinner';

const HomePage = () => {
  const [query, setQuery] = React.useState('');

  const { data, isLoading, error, size, setSize } = useFetchMoviesSwr(query, 1);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      if (data && data?.[0]?.total_pages >= size) {
        setSize((prev) => prev + 1);
      }
    }
  };

  if (error) return <div>Oh noooooooo something went wrong!</div>;

  return (
    <main
      className="main-element relative h-screen overflow-y-scroll"
      onScroll={handleScroll}
    >
      <Header setQuery={setQuery} />
      <Grid
        className="p-4 max-w-7xl m-auto"
        title={
          query
            ? `Search Results: ${data?.[0].total_results}`
            : 'Popular Movies'
        }
      >
        {data && data?.length > 0
          ? data.map((page) =>
              page.results.map((movie) => (
                <Link key={movie.id} href={`/${movie.id}`}>
                  <div className="cursor-pointer hover:opacity-80 duration-300">
                    <Card
                      imgUrl={
                        movie.poster_path
                          ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                          : '/no_image.jpg'
                      }
                      title={movie.original_title}
                    />
                  </div>
                </Link>
              ))
            )
          : null}
      </Grid>
      {isLoading ? <Spinner /> : null}
    </main>
  );
};

export default HomePage;
