import { BASE_URL } from '../config/tmdb'
import { formatRating } from '../utils/formatRating'

export function tmdbListAdapter(items) {
  return items.map((item) => {
    const isMovie = !!item.title

    const backdrop = BASE_URL.backdrop + item.backdrop_path
    const poster = BASE_URL.poster + item.poster_path
    const rating = formatRating(item?.vote_average)

    const data = {
      backdrop,
      description: item.overview,
      id: item.id,
      poster,
      rating,
    }

    if (isMovie) {
      return {
        ...data,
        releaseDate: item.release_date,
        title: item.title,
        type: 'movie',
      }
    }

    return {
      ...data,
      releaseDate: item.first_air_date,
      title: item.name,
      type: 'tv',
    }
  })
}
