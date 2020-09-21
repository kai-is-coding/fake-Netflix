export function getImagesURL(path) {
  if (path) {
    return `https://image.tmdb.org/t/p/w200${path}`;
  }
  return `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxMNso6QcSI03KFMAmy6MskzaaXp6eG-XxlA&usqp=CAU`;
}
