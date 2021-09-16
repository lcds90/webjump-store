const BASE_API = 'http://localhost:8888/api/V1';

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_API}/categories/list`);
    const json = await response.json();
    return Promise.resolve(json);
  } catch (error) {
    return Promise.reject(error);
  }
};
export const fetchProductList = (id) => {
  fetch(`${BASE_API}/categories/${id}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ));
};
