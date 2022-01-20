import { getStrapiImageURL } from "./api";

export function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiImageURL(media.url)
    : media.url;
  return imageUrl;
}
