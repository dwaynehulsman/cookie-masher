// Make a cookie
function createCookie(name, value, expires, path, domain) {
  var cookie = name + "=" + escape(value) + ";";

  if (expires) {

    if(expires instanceof Date) {

      if (isNaN(expires.getTime()))
       expires = new Date();
    }
    else
      expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);

    cookie += "expires=" + expires.toGMTString() + ";";
  }

  if (path)
    cookie += "path=" + path + ";";
  if (domain)
    cookie += "domain=" + domain + ";";

  document.cookie = cookie;
}

// Read a cookie
function getCookie(name) {
  var regexp = new RegExp("(?:^" + name + "|;\s*"+ name + ")=(.*?)(?:;|$)", "g");
  var result = regexp.exec(document.cookie);
  return (result === null) ? null : result[1];
}


// Delete a cookie
function deleteCookie(name, path, domain) {
  // If the cookie exists
  if (getCookie(name))
    createCookie(name, "", -1, path, domain);
}

//$arg1 = Name $arg2 = Value of name $arg3 = expiry date in days


//$arg1 = cookie name


//$arg1 = cookie name

// deleteCookie("author");

//update cookies
window.setInterval(function(){
  console.log(points);
  createCookie("cookies", points, 30);
  console.log(getCookie("cookies"));

}, 10000);
