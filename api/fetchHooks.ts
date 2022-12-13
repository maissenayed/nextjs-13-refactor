import { useInfiniteQuery } from '@tanstack/react-query';
import useSWRInfinite from 'swr/infinite';
import { SWRInfiniteKeyLoader } from 'swr/infinite';

// Fetch function
import { fetchMovieAxios, fetchMovies } from './fetchFunctions';
// Types
import { Movies } from './types';

export const useFetchMovies = (search: string) => {
  return useInfiniteQuery<Movies, Error>(
    ['movies', search],
    ({ pageParam = 1 }) => fetchMovies(search, pageParam),
    {
      getNextPageParam: (lastPage: Movies) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }

        return undefined;
      },
      refetchOnWindowFocus: false,
    }
  );
};
export const useFetchMoviesSwr = (search: string, page: number) => {
  const getKey: SWRInfiniteKeyLoader = () => {
    return `/movies?page=${page}&query=${search}`; // SWR key
  };
  return useSWRInfinite(getKey, () => fetchMovieAxios(search, page));
};
