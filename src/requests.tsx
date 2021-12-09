const API_KEY = "5ec63e784a596c72b0bc99a799a14f7b"

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movies/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_henres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_henres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_henres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_henres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_henres=99`,
}

export default requests