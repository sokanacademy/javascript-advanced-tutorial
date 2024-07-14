/* var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(xhttp.responseText);
  } else {
    console.log("error");
  }
};
xhttp.open(
  "GET",
  "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJryijc9s0K4gRG9aU7SDTXdA&key=[YOURAPIKEY]",
  true
);
xhttp.send(); */

fetch(
  "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJryijc9s0K4gRG9aU7SDTXdA&key=[YOURAPIKEY]"
)
  .then((res) => res.json())
  .then((val) => console.log(val));
