import movieApi from "../access/movie";

export async function getHome(search = "non-active") {
  try {
    const results = await movieApi.getHome();
    const formatData = await results.map((fomatData) => {
      return {
        ...fomatData,
        type: "home",
        search: search
      };
    });
    return formatData;
  } catch (err) {
    console.log(err);
  }
}
export async function getTheater(search = "non-active") {
  try {
    const results = await movieApi.getTheater();
    const formatData = await results.map((fomatData) => {
      return {
        ...fomatData,
        type: "theater",
        search: search
      };
    });
    return formatData;
  } catch (err) {
    console.log(err);
  }
}
export async function getDramma(search = "non-active") {
  try {
    const results = await movieApi.getDramma();
    const formatData = await results.map((fomatData) => {
      return {
        ...fomatData,
        type: "dramma",
        search: search
      };
    });
    return formatData;
  } catch (err) {
    console.log(err);
  }
}
export async function getSearch(query) {
  try {
    const results = await movieApi.getSearch(query);
    const formatData = await results.map((fomatData) => {
      return {
        ...fomatData,
        type: query,
        search: "active"
      };
    });
    return formatData;
  } catch (err) {
    console.log(err);
  }
}
export async function getTrailer(idMovie) {
  try {
    const results = await movieApi.getTrailer(idMovie);
    return results;
  } catch (err) {
    console.log(err);
  }
}
export async function getDetail(idMovie) {
  try {
    const results = await movieApi.getDetail(idMovie);
    return results;
  } catch (err) {
    console.log(err);
  }
}
export async function getCast(idMovie) {
  try {
    const results = await movieApi.getCast(idMovie);
    return results;
  } catch (err) {
    console.log(err);
  }
}
export async function getAuthorize() {
  try {
    const token = await movieApi.getRequestToken();
    localStorage.setItem("request_token", token);
    return token;
  } catch (err) {
    console.log(err);
  }
}
export async function postAuthentication(data) {
  try {
    const api = await movieApi.postAuthentication(data);
    localStorage.setItem("request_token", api);
    return api;
  } catch (err) {
    console.log(err);
  }
}
