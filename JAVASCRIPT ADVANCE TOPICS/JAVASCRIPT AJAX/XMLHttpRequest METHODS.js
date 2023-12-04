/*

XMLHttpRequest methods --

-------------------------------------------------------------------------------------

1. open(method, url, async, user, psw) — This method is used to initializes a newly-created request, or re-initializes an existing one.

where 

method: the request type GET, POST or HEAD or another method supported by server

url: The URL/File Location you are sending the request to. This can be a .txt, .xml, .asp, .jsp, .php files etc.

async: If asynchronous then it take true or if synchronous then it take false. By default it is true.

user: user name to use for authentication purpose. By default its null. It is optional

psw: password to use for authentication purpose. By default its null. It is optional

Example:-
xhr.open("GET", 'data.txt', true);
xhr.open("GET", 'https://jsonplaceholder.typicode.com/posts', true);



2. send() — This method is used to send the request to server. This is used for GET requests.

Example:- xhr.send();

send(body) — This method is used to send the request to the server. This is used for POST requests.
Where body is the data you want to send.

Example:- xhr.send("fname=geeky&lname=shows");


3. setRequestHeader(header, value) — This method is used to Add a header-value pair to the header to be sent.

Example:- xhr.setRequestHeader("Access-Control-Allow-Origin","*")



4. getResponseHeader(headerName) — This method returns specific header information from the server response.

Example:- xhr.getResponseHeader("Last-Modified")


5. getAllResponseHeaders() — This method returns all header information from the server response.

Example:- xhr.getAllResponseHeaders()


6. abort() — This method is used to cancel the current request. When a request is aborted, its readyState is changed to XMLHttpRequest.UNSENT (0) and the request's status code is set to 0.

7. overrideMimeType(mimeType) - It specifies a MIME type other than the one provided by the server to be used instead when interpreting the data being transferred in a request.This may be used, for example, to force a stream to be treated and parsed as "text/xml", even if the server does not report it as such.

This method must be called before calling send().

Example:- xhr.overrideMimeType("text/plain");


*/