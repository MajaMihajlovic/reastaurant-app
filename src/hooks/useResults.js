import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errors, setErrorMessage] = useState("");

  useEffect(() => {
    searchApi("pasta");
  }, []);

  const searchApi = async (term) => {
     
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "san jose",
        }
      });
      console.log("search")
      setResults(response.data.businesses);
      setErrorMessage("")
    } catch (err) {
        console.log(err);
      setErrorMessage("Something went wrong");
    }
  };
  return [searchApi, results, errors];
};
