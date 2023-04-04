import { BASE_URL } from '../config/tmdb'
import { convertMinutesToHours } from '../utils/convertMinutesToHours'
import { formatRating } from '../utils/formatRating'

export function tmdbDetailsAdapter(item) {
  const isMovie = !!item.title

  const backdrop = BASE_URL.backdrop + item.backdrop_path
  const poster = BASE_URL.poster + item.poster_path
  const rating = formatRating(item?.vote_average)
  const runtime = convertMinutesToHours(item?.runtime)

  const data = {
    backdrop,
    description: item.overview,
    genres: item.genres,
    homepage: item.homepage,
    id: item.id,
    poster,
    rating,
    status: item.status,
  }

  if (isMovie) {
    return {
      ...data,
      releaseDate: item.release_date,
      runtime,
      title: item.title,
      type: 'movie',
    }
  }

  return {
    ...data,
    numberOfEpisodes: item.number_of_episodes,
    numberOfSeasons: item.number_of_seasons,
    releaseDate: item.first_air_date,
    title: item.name,
    type: 'tv',
  }
}
