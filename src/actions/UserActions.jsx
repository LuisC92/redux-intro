import axios from "axios";

// async action to fetch users from api
export const getUsersFromApi = () => {
  return dispatch => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => dispatch({ type: "GET USERS", payload: res.data }));
  };
};
