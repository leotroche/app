import { TMDB } from '../api/axiosInstance'

export function tmdbDetailsAdapter(item) {
  const isMovie = !!item.title

  const details = {
    backdrop: TMDB.path.images.backdrop + item.backdrop_path,
    description: item.overview,
    genres: item.genres.map((genre) => genre.name),
    homepage: item.homepage,
    id: item.id,
    isMovie,
    poster: TMDB.path.images.poster + item.poster_path,
    rating: item.vote_average,
    releaseDate: isMovie ? item.release_date : item.first_air_date,
    title: isMovie ? item.title : item.name,
  }

  if (isMovie) {
    return { ...details, runtime: item.runtime }
  }

  return {
    ...details,
    numberOfEpisodes: item.number_of_episodes,
    numberOfSeasons: item.number_of_seasons,
  }
}
