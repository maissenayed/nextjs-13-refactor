import { API_KEY } from '../config';
import { Movies } from './types';
import axios from '../axios/axiosinstance';

export const basicFetch = async <returnType>(
  endpoint: string
): Promise<returnType> => {
  const response = await fetch(`https://api.themoviedb.org/3/${endpoint}`);

  if (!response.ok) throw new Error('Error!');

  const data = await response.json();

  return data;
};

// Fetch functions
export const fetchMovies = async (query = '', page = 1): Promise<Movies> => {
  return await basicFetch<Movies>(
    `search/movie?api_key=${API_KEY}&query="${query}"&page=${page}}`
  );
};

// Fetch functions
export const fetchMovieAxios = async (query = '', page = 1) => {
  const res = await axios.get<Movies>(
    `search/movie?api_key=${API_KEY}&query="${query}"&page=${page}}`
  );
  const data = res.data;
  return data;
};
