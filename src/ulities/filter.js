export function formatData(array, option, key) {
  let result;

  switch (option.type) {
    case "filter": {
      result = array.filter((item) => {
        return item[key] === option.payload;
      });
      return result;
    }
    case "filterNumber": {
      result = array.filter((item) => {
        return item[key] >= option.payload;
      });
      return result;
    }
    default: {
      throw new Error("there has some mistakes");
    }
  }
}
