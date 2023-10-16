// Cookies are a small string of data that is directly stored in the browser 
// When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.

// Cookies were invented to solve the problem "how to remember information about the user":
//   . When a user visits a web page, his/her name can be stored in a cookie.
//   . Next time the user visits the page, the cookie "remembers" his/her name.

// In this we can add as many cookies, this will not overwrite the existing cookies instead it will add.

document.cookie = "username:abcd";
document.cookie = "username:efgh";
console.log(document.cookie)

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
// we can also add an expiry date to any cookie

// The name value pair after encodedURIComponent, should not be exceed 4 kb

decodeURIComponent()


// Local Storage

// methods of local storage

// localStorage.setItem("name","value")
// localStorage.getItem()
// localStorage.removeItem(key)

// window.onstorage = (e)=>{
//     alert("changed")
//     console.log(e)
// }

// Above method will alert you when you changed the value in local or session storage when same page is opened in two different tabs.