export function getImagesURL(path) {
  try {
    return `https://image.tmdb.org/t/p/w200/${path}`;
  } catch (error) {
    console.log("errors", error);
  }
}
