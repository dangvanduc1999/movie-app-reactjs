import REplace from "../asset/image/REplace.jpg";
const API__IMG = "https://image.tmdb.org/t/p/w500";
export default async function getMovie(url, type, search = "non-active") {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const formatData = await data.results.map((fomatData) => {
      const imgPoster = fomatData.poster_path;
      const imgBack = fomatData.backdrop_path;
      return {
        ...fomatData,
        poster_path: API__IMG + imgPoster,
        backdrop_path: imgBack ? API__IMG + imgBack : REplace,
        isLiked: false,
        type: type,
        search: search,
      };
    });
    return formatData;
  } catch (err) {
    console.log(err);
  }
}
