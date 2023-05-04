import axiosConfig from "../../axiosConfig/axiosConfig";

export default function getProducts(params) {
  return (dispatch) => {
    return axiosConfig
      .get(`/product`)
      .then((res) => {
        dispatch({ type: "GET_products", payload: res.data.products });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
}