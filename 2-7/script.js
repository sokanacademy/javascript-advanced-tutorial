function setCookie(name, value, expDay) {
  const d = new Date();
  d.setTime(d.getTime() + expDay * 24 * 60 * 60 * 1000);
  let expDate = d.toUTCString();
  document.cookie = name + "=" + value + ";expires=" + expDate + ";path=/";
}

function getCookie(name) {
  let cname = name + "=";
  let cookies = document.cookie.split(";");
  let value = "";
  for (let i = 0; i < cookies.length; i++) {
    let myCookie = cookies[i];
    if (myCookie.includes(name) == true) {
      if (myCookie.charAt(0) == " ") {
        value = myCookie.slice(cname.length + 1);
        console.log(value);
      } else {
        value = myCookie.slice(cname.length);
      }
      return value;
    }
  }
  return "";
}

function checkCookie(name) {
  let value = getCookie(name);
  if (value != "") {
    alert("welcome " + value);
  } else {
    value = prompt("what is your name?", "");
    if (value != "" && value != null) {
      setCookie(name, value, 10);
    }
  }
}
