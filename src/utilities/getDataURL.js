import http from "../services/httpService";

export function getDataURL(mediaType, id, dataType = null) {
  if (dataType) {
    return `${mediaType}/${id}/${dataType}?api_key=${http.api_key}`;
  } else {
    return `${mediaType}/${id}?api_key=${http.api_key}`;
  }
}
