const BASE_API = `https://${process.env.URL}`;

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_API}/categories/list`);
    const json = await response.json();
    return Promise.resolve(json);
  } catch (error) {
    return Promise.reject(error);
  }
};
export const fetchProductList = async (id) => {
  const verifyId = {
    camisetas: '1',
    calcas: '2',
    calcados: '3',
  };

  try {
    const response = await fetch(`${BASE_API}/categories/${verifyId[id]}`);
    const json = await response.json();
    return Promise.resolve(json);
  } catch (error) {
    return Promise.reject(error);
  }
};
