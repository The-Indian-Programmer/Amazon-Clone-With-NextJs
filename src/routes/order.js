const hostUrl = process.env.HOST;
export const postData = async (url, post) => {
  const res = await fetch(`${hostUrl}/api/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  const data = await res.json();
  return data;
};
export const getorderData = async (url, email) => {
  const res = await fetch(`${hostUrl}/api/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });

  const data = await res.json();
  return data;
};
