import movieApi from "../api/movie";

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
