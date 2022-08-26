const postAPI = async (url, data) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
export default postAPI;
