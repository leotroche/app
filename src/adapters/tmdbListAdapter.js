import { TMDB } from '../api/axiosInstance'

export function tmdbListAdapter(items) {
  return items.map((item) => {
    const isMovie = !!item.title

    return {
      backdrop: TMDB.path.images.backdrop + item.backdrop_path,
      description: item.overview,
      id: item.id,
      isMovie,
      poster: TMDB.path.images.poster + item.poster_path,
      rating: item.vote_average,
      releaseDate: isMovie ? item.release_date : item.first_air_date,
      title: isMovie ? item.title : item.name,
    }
  })
}
