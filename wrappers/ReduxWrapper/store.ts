import { Movie, Movies } from '../../api/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY } from '../../config';

export const moviesApi = createApi({
  reducerPath: 'Movies api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  tagTypes: ['Movies'],
  endpoints: (builder) => ({
    search: builder.query<Movies, { query: string; page: number }>({
      query({ query = ' ', page = 1 }) {
        return {
          url: `search/movie?api_key=${API_KEY}&query="${query}"&page=${page}}`,
          method: 'GET',
        };
      },
      providesTags: [{ type: 'Movies', id: 'LIST' }],
    }),
  }),
});
