import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
    // console.log(media)
    // console.log(media.url)
  return imageUrl;
  
 
}
