let endpoint = "https://jsonplaceholder.typicode.com/posts";

async function publish(endpoint, options) {
  let res = await fetch(endpoint, options);
  let value = await res.json();
  console.log(value);
}

publish(endpoint, options);
