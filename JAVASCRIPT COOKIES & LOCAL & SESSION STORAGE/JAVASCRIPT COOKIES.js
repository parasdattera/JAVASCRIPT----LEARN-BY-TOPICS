/*

Cookies let you store user information in web pages.


What are Cookies? -- a way of storing data

Cookies are data, stored in small text files, on your computer.

When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.

Cookies were invented to solve the problem "how to remember information about the user":

When a user visits a web page, his/her name can be stored in a cookie.

Next time the user visits the page, the cookie "remembers" his/her name. Because cookies are sent with the http requests everytime

Cookies are saved in name-value pairs like:

username = John Doe

and saperated by -- ;


Create a Cookie with JavaScript

JavaScript can create, read, and delete cookies with the document.cookie property.

*/


// sample creating a cookie

// document.cookie = "username = Paras Dattera"

// getting all cookies in alert

// alert(document.cookie);

// if using same name variable and assigning values then it will reassign it

// document.cookie = "username = Ajay Kumar"
// alert(document.cookie);


// sample -- getting cookie value from user

let key = prompt("Enter key");
let value = prompt("Enter value");
document.cookie = `${key}=${value}`
console.log(document.cookie);

// encode URI component -- this function helps keep the valid formatting . for special characters when using with -- ; -- is used as special characters are not recognised without this method

// sample -- with encode URI component


let key1 = prompt("Enter key");
let value1 = prompt("Enter value");
document.cookie = `${encodeURIComponent(key1)}=${encodeURIComponent(value1)}`
console.log(document.cookie);

// this function encode the word and convert into non understandable format and to decode that we need to use decodeURIComponent()

console.log(decodeURIComponent("dfdsfa%3Bparas")); // this will convert into original word


/* 

Cookies options -- path , expires , domain , secure

path ---  path=/mypath -- 

The url path prefix must be absolute. It makes the cookie accessible for pages under that path. By default, it’s the current path.

If a cookie is set with path=/admin, it’s visible at pages /admin and /admin/something, but not at /home or /adminpage.

Usually, we should set path to the root: path=/ to make the cookie accessible from all website pages.

------------------------------------------------------


expires , max-age  -- 

By default, if a cookie doesn’t have one of these options, it disappears when the browser is closed. Such cookies are called “session cookies”

To let cookies survive a browser close, we can set either the expires or max-age option.

expires=Tue, 19 Jan 2038 03:14:07 GMT
The cookie expiration date defines the time, when the browser will automatically delete it.

The date must be exactly in this format, in the GMT timezone. We can use date.toUTCString to get it. For instance, we can set the cookie to expire in 1 day:

 -- +1 day from now
let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = "user=John; expires=" + date;

If we set expires to a date in the past, the cookie is deleted.

max-age=3600

It’s an alternative to expires and specifies the cookie’s expiration in seconds from the current moment.

-- cookie will die in +1 hour from now
document.cookie = "user=John; max-age=3600";

-- delete cookie (let it expire right now)
document.cookie = "user=John; max-age=0";
------------------------------------------------------



domain  -- domain=site.com

A domain defines where the cookie is accessible.

There’s no way to let a cookie be accessible from another 2nd-level domain, so other.com will never receive a cookie set at site.com.

It’s a safety restriction, to allow us to store sensitive data in cookies that should be available only on one site.

By default, a cookie is accessible only at the domain that set it.

Please note, by default a cookie is also not shared to a subdomain as well, such as forum.site.com.

-- if we set a cookie at site.com website...
document.cookie = "user=John"

-- we won't see it at forum.site.com
alert(document.cookie); // no user

…But this can be changed. If we’d like to allow subdomains like forum.site.com to get a cookie set at site.com, that’s possible.

For that to happen, when setting a cookie at site.com, we should explicitly set the domain option to the root domain: domain=site.com. Then all subdomains will see such cookie.


-- at site.com
-- make the cookie accessible on any subdomain *.site.com:

document.cookie = "user=John; domain=site.com"

// later

// at forum.site.com

alert(document.cookie); // has cookie user=John


*/