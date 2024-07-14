const axios = require("axios");

const config = {
  headers: {
    "accept-encoding": "*",
  },
};

axios
  .get("https://jsonplaceholder.typicode.com/posts", config)
  .then((res) => console.log(res.data));





//اگر این هدر رو نذاریم روی نود خالی، خرچنگ قورباغه میاد.
const headers = {'accept-encoding': '*'};

axios
.get("https://randomuser.me/api/", {headers})
.then((res) => console.log('res is: ', res.data));
