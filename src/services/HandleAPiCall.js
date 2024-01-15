import axios from "axios";

//  url of the api
// if vite - use import.meta.env.VITE_API_URL
// if react - use process.env.REACT_APP_API_URL
const url = "https://dummyjson.com/auth/login";

const handleApiCall = ({ data, cb, setLoading }) => {
  async function handelCall() {
    // loading start
    setLoading(true);
    try {
      // axios call
      const response = await axios({
        method: "post",
        url,
        data,
        headers: {
          Accept: "*/*",
          "Content-Type": "multipart/form-data",
        },
      });

      setLoading(false);
      // if success
      return cb(response.data, response.status);
      // if we have error
    } catch (error) {
      // loading false
      setLoading(false);
      //   pass error to the callback
      cb(error, error.message);
      //   console.log error
      console.log(error.response?.data?.message);
      throw error;
    }
  }
  //   return function that we can call it
  return handelCall();
};

export default handleApiCall;
