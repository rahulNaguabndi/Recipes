import axios from "axios";
const RecpieAPI = (searchTearm, onDataFetch) => {
  axios
    .get("https://api.edamam.com/search", {
      params: {
        q: searchTearm,
        app_id: "658c9710",
        app_key: "d0c61c2f61e2750715dd2607f07efd18",
      },
    })
    .then((response) => {
      console.log(response.data);
      onDataFetch(response.data);
    });
  return 1;
};

export default RecpieAPI;
