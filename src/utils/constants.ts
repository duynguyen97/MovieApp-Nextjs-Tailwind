export const THEMOVIEDB_IMAGE = "https://image.tmdb.org/t/p/";

export const imageResize = (src: string, dimension: string = "w200") =>
  `${THEMOVIEDB_IMAGE}${dimension}${src}`;
export const imageOriginal = (src: string) =>
  `${THEMOVIEDB_IMAGE}original${src}`;
