async function fetchApi(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw {
        message: "Failed to fetch Vans",
        statusText: response.statusText,
        status: response.status,
      };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export default fetchApi;
