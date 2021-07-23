import movieApi from "../api/movie";

const API__KEY = "api_key=7973b4eac4de19d61157e9fb0edfae5f";
export async function getHome(search = "non-active") {
  try {
    const results = await movieApi.getHome();
    const formatData = await results.map((fomatData) => {
      return {
        ...fomatData,
        type: "home",
        search: search,
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
        search: search,
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
        search: search,
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
    console.log(results);
    const formatData = await results.map((fomatData) => {
      return {
        ...fomatData,
        type: query,
        search: "active",
      };
    });
    return formatData;
  } catch (err) {
    console.log(err);
  }
}
