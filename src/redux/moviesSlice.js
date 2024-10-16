import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Example API URL
const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const API_URL = 'https://api.themoviedb.org/3';

// Thunk to fetch popular movies
export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopularMovies',
  async () => {
    const response = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
  }
);

// Thunk to fetch top-rated movies
export const fetchTopRatedMovies = createAsyncThunk(
  'movies/fetchTopRatedMovies',
  async () => {
    const response = await axios.get(`${API_URL}/movie/top_rated?api_key=${API_KEY}`);
    return response.data.results;
  }
);

// Thunk to fetch upcoming movies
export const fetchUpcomingMovies = createAsyncThunk(
  'movies/fetchUpcomingMovies',
  async () => {
    const response = await axios.get(`${API_URL}/movie/upcoming?api_key=${API_KEY}`);
    return response.data.results;
  }
);

// Thunk to search movies with pagination
export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async ({ query, page }) => {
    const response = await axios.get(`${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`);
    return {
      results: response.data.results,
      totalPages: response.data.total_pages,
    };
  }
);

// Thunk to fetch movie details
export const fetchMovieDetails = createAsyncThunk(
  'movies/fetchMovieDetails',
  async (movieId) => {
    const response = await axios.get(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  }
);

// Thunk to fetch movie cast
export const fetchMovieCast = createAsyncThunk(
  'movies/fetchMovieCast',
  async (movieId) => {
    const response = await axios.get(`${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data.cast;
  }
);

// Movies slice
const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    popular: [],
    topRated: [],
    upcoming: [],
    searchedMovies: [],
    totalPages: 0,
    movieDetails: null,
    movieCast: [],
    status: 'idle', 
    error: null,
  },
  reducers: {
    clearSearchedMovies: (state) => {
      state.searchedMovies = [];
      state.totalPages = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch popular movies
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.popular = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Fetch top-rated movies
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.topRated = action.payload;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Fetch upcoming movies
      .addCase(fetchUpcomingMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.upcoming = action.payload;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Search movies
      .addCase(searchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchedMovies = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Fetch movie details
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movieDetails = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Fetch movie cast
      .addCase(fetchMovieCast.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieCast.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movieCast = action.payload;
      })
      .addCase(fetchMovieCast.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

// Exporting the action for clearing searched movies
export const { clearSearchedMovies } = moviesSlice.actions;

// Export the reducer as default
export default moviesSlice.reducer;


 