import axios from "axios";
const getProductListing = async () => {
  try {
    const data = await axios.get(
      "https://front-test-api.herokuapp.com/api/product"
    );
    return data.data;
  } catch (e) {
    console.log("api failed");
  }
};

const getProductDetail = async (id) => {
  try {
    const data = await axios.get(
      `https://front-test-api.herokuapp.com/api/product/${id}`
    );
    return data.data;
  } catch (e) {
    console.log("api failed");
  }
};

const addProduct = async (id, color, storage) => {
  try {
    const data = await axios.post(
      `https://front-test-api.herokuapp.com/api/cart`,
      {
        id,
        colorCode: color,
        storageCode: storage,
      }
    );
    return data.data;
  } catch (e) {
    console.log("api failed");
  }
};

export { getProductListing, getProductDetail, addProduct };
