function set_cookie(name, value, exp_day) {
  const d = new Date();
  d.setTime(d.getTime() + exp_day * 24 * 60 * 60 * 1000);
  let expires = d.toUTCString();
  document.cookie = name + "=" + value + ";expires=" + expires + ";path=/";
}

function get_cookie(name) {
  let cname = name + "=";
  let cookies = document.cookie.split(";");
  let value = "";
  for (let i = 0; i < cookies.length; i++) {
    let my_cookie = cookies[i];
    if (my_cookie.includes(name) == true) {
      if (my_cookie.charAt(0) == " ") {
        value = my_cookie.slice(cname.length + 1);
        console.log(value);
      } else {
        value = my_cookie.slice(cname.length);
      }
      return value;
    }
  }
  return "";
}

function check_cookie(name, limit, exp_day) {
  let value = parseInt(get_cookie(name)) - 1;
  if (value > 0) {
    set_cookie(name, value, exp_day);
  } else if (value == 0) {
    return 0;
  } else {
    value = limit;
    alert(`این اولین پست شما از ${value} پست در ماه است.`);
    if (value != "" && value != null) {
      set_cookie(name, value, exp_day);
    }
  }
  return value;
}
