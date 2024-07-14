async function publish(postData) {
  let config = {
    data: postData,
  };
  let response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    config
  );
  alert(`response status is: ${response.status}`);
}

const title_box = document.getElementById("title");
const message_box = document.getElementById("message");
const button = document.getElementById("pub-btn");

button.addEventListener("click", () => {
  const limit = check_cookie("limit", 4, 30);
  if (limit > 0) {
    let myData = {
      title: title_box.value,
      body: message_box.value,
    };
    publish(myData);
    alert(`شما می توانید ${limit-1} بار دیگر پست کنید.`);
  } else {
    alert("تعداد پست ماهانه شما تمام شده");
  }
});
