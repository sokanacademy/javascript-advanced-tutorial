async function publish(subject, text) {
  const options = {
    method: "POST",
    body: JSON.stringify({
      title: subject,
      body: text,
      userId: 12,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  let response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );
  let value = await response.json();
  console.log(value.id);
}

publish("new post", "Ali was here!");
