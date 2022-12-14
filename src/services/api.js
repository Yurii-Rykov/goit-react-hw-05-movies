const axios = require('axios').default;

export const API = {
  trending: async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=7e27a31a64f35e2d3f45ab72b99097a8`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  movie: async word => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=7e27a31a64f35e2d3f45ab72b99097a8&language=en-US&page=1&query=${word}&include_adult=false`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  infoCart: async movieId => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=7e27a31a64f35e2d3f45ab72b99097a8&language=en-US&page=1`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  cast: async movieId => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=7e27a31a64f35e2d3f45ab72b99097a8&language=en-US`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  reviews: async movieId => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=7e27a31a64f35e2d3f45ab72b99097a8&language=en-US&page=1`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
