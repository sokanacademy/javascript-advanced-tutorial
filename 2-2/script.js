const options = {
  method: "POST",
  body: JSON.stringify({
    title: "Sokan Academy",
    body: "Ali was here",
    userId: 12,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then((response) => response.json())
  .then((value) => console.log(value));
