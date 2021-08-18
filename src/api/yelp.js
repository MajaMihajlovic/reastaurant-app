import axios from "axios";

const API_Key =
  "K6boCZ6jGOm6BFYBiv9NbvoZcvcmtAe3Fd3FebOWNVtv4fromCIJmeFhx8dlbqd8sQ1DaeaSVkrMsgPW92yJm1W9xW8nenvo3C_-M-jqf-_KZto35tW1zlzAswAcYXYx";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
      Authorization: `Bearer ${API_Key}`
  }
});
