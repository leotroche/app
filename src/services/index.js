// TMDB Adapters
import { tmdbDetailsAdapter } from '../adapters/tmdbDetailsAdapter'
import { tmdbListAdapter } from '../adapters/tmdbListAdapter'
import { tmdbVideoAdapter } from '../adapters/tmdbVideoAdapter'

// Axios Instance, Path
import { PATH, TMDB } from '../config/tmdb'

/* ---- ---- ---- MOVIES [] ---- ---- ---- */

export async function getNowPlayingMovies({ config } = {}) {
  const resp = await TMDB.api(PATH.movies.nowPlaying, config)
  const data = await resp.data.results
  return tmdbListAdapter(data)
}

export async function getPopularMovies({ config } = {}) {
  const resp = await TMDB.api(PATH.movies.popular, config)
  const data = await resp.data.results
  return tmdbListAdapter(data)
}

export async function getTopRatedMovies({ config } = {}) {
  const resp = await TMDB.api(PATH.movies.topRated, config)
  const data = await resp.data.results
  return tmdbListAdapter(data)
}

export async function getUpcomingMovies({ config } = {}) {
  const resp = await TMDB.api(PATH.movies.upcoming, config)
  const data = await resp.data.results
  return tmdbListAdapter(data)
}

/* ---- ---- ---- MOVIES {} (ID) ---- ---- ---- */

export async function getMovieDetails({ id, config = {} }) {
  const resp = await TMDB.api(PATH.movies.details(id), config)
  const data = await resp.data
  return tmdbDetailsAdapter(data)
}

export async function getMovieVideos({ id, config = {} }) {
  const resp = await TMDB.api(PATH.movies.videos(id), config)
  const data = await resp.data.results
  return tmdbVideoAdapter(data)
}

/* ---- ---- ---- TV SHOWS [] ---- ---- ---- */

export async function getAiringTodayTVShows({ config } = {}) {
  const resp = await TMDB.api(PATH.tvShows.airingToday, config)
  const data = await resp.data.results
  return tmdbListAdapter(data)
}

export async function getOnTheAirTVShows({ config } = {}) {
  const resp = await TMDB.api(PATH.tvShows.onTheAir, config)
  const data = await resp.data.results
  return tmdbListAdapter(data)
}

export async function getPopularTVShows({ config } = {}) {
  const resp = await TMDB.api(PATH.tvShows.popular, config)
  const data = await resp.data.results
  return tmdbListAdapter(data)
}

export async function getTopRatedTVShows({ config } = {}) {
  const resp = await TMDB.api(PATH.tvShows.topRated, config)
  const data = await resp.data.results
  return tmdbListAdapter(data)
}

/* ---- ---- ---- TV SHOWS {} (ID) ---- ---- ---- */

export async function getTvShowDetails({ id, config = {} }) {
  const resp = await TMDB.api(PATH.tvShows.details(id), config)
  const data = await resp.data
  return tmdbDetailsAdapter(data)
}

export async function getTvShowVideos({ id, config = {} }) {
  const resp = await TMDB.api(PATH.tvShows.videos(id), config)
  const data = await resp.data.results
  return tmdbVideoAdapter(data)
}

/* ---- ---- ---- SEARCH [] (QUERY) ---- ---- ---- */

export async function getMultiSearch({ query }) {
  const resp = await TMDB.api(PATH.search.multi, { params: { query } })
  const data = await resp.data.results
  return tmdbListAdapter(data)
}

export async function getSearchMovies({ query }) {
  const resp = await TMDB.api(PATH.search.movies, { params: { query } })
  const data = await resp.data.results
  return tmdbListAdapter(data)
}

export async function getSearchTVShows({ query }) {
  const resp = await TMDB.api(PATH.search.tvShows, { params: { query } })
  const data = await resp.data.results
  return tmdbListAdapter(data)
}

/* ---- ---- ---- DISCOVER [] ---- ---- ---- */

export async function getDiscoverMovies({ config } = {}) {
  const resp = await TMDB.api(PATH.discover.movies, config)
  const data = await resp.data.results
  return tmdbListAdapter(data)
}

export async function getDiscoverTVShows({ config } = {}) {
  const resp = await TMDB.api(PATH.discover.tvShows, config)
  const data = await resp.data.results
  return tmdbListAdapter(data)
}
