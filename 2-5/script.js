async function publish(postData) {
  let config = {
    data: postData,
  };
  let response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    config
  );
  console.log("response is: ", response);
}

let myData = {
  title: "new new post",
  body: "new post",
};

// publish(myData);
const body = document.getElementsByTagName("body")[0];
const button = document.createElement("button");
button.textContent = "publish";
button.addEventListener("click", ()=>{publish(myData)});
body.appendChild(button);
