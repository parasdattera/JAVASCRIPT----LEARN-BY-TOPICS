/*


XMLHttpRequest properties --

1. onreadystatechange -- It defines a function to be called when the readystate property changes.

The onreadystatechange is called multiple times during an XHR request. We explicitly ignore all the states other than readyState === 4, which means that the request is done.

2. readyState -- This property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:

      value 0 - state unsent -  The XMLHttpRequest client has been created, but the open() method hasn't been called yet.

      value 1 - state opened - open() method has been invoked. During this state, the request headers can be set using the setRequestHeader() method and the send() method can be called which will initiate the fetch.

      value 2 - state headers received - send() has been called and the response headers have been received.

      value 3 - state loading -  Response's body is being received. If responseType is "text" or empty string, responseText will have the partial text response as it loads.

      value 4 - state done -  The fetch operation is complete. This could mean that either the data transfer has been completed successfully or failed.

3. responseType - It is an enumerated string value specifying the type of data contained in the response.It also lets the author change the response type.If an empty string is set as the value of responseType, the default value of text is used. 

    * ""- An empty responseType string is treated the same as "text", the default type.
     
    * arraybuffer - The response is a JavaScript ArrayBuffer containing binary data.

    * blob - The response is a Blob object containing the binary data.

    * document - The response is an HTML Document or XML XMLDocument, as appropriate based on the MIME type of the received data.
    
    * json - The response is a JavaScript object created by parsing the contents of received data as JSON.

    * text - The response is a text in a DOMString object.


4. responseText - It returns the text received from a server following a request being sent.

5. responseXML -  It is read-only property returns a Document containing the HTML or XML retrieved by the request; or null if the request was unsuccessful, has not yet been sent, or if the data can't be parsed as XML or HTML.

6. status -  It returns the numerical HTTP status code of the XMLHttpRequest's response.     200: "OK   ,  403: "Forbidden" , 404: "Not Found"

7. statusText - It returns the status-text (e.g. "0K" or "Not Found"). If the request's readyState is in UNSENT or OPENED value of will be an empty string.

8. response — This property returns the response's body content as an ArrayBuffer, Blob, Document,JavaScript Object, or DOMString, depending on the value of the request's responseType property.

9. timeout — This property is an unsigned long representing the number of milliseconds a request can take before automatically being terminated. The default value is 0, which means there is no timeout.Timeout shouldn't be used for synchronous XMLHttpRequests requests used in a document environment or it will throw an InvalidAccessError exception. When a timeout happens, a timeout event is fired.

10. responseURL - It returns the serialized URL of the response or the empty string if the URL is null. If the URL is returned, any URL fragment present in the URL will be stripped away. The value of responseURL will be the final URL obtained after any redirects.

11. upload — It returns an XMLHttpRequestUpload object that can be observed to monitor an upload's progress. It is an opaque object, but because it's also an XMLHttpRequestEventTarget, event listeners can be attached to track its process.

12. withCredentials - It is a Boolean that indicates whether or not cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates. Setting withCredentials has no effect on same-site requests.In addition, this flag is also used to indicate when cookies are to be ignored in the response. The default is false.XMLHttpRequest from a different domain cannot set cookie values for their own domain unless withCredentials is set to true before making the request. The third-party cookies obtained by setting
withCredentials to true will still honor same-origin policy and hence can not be accessed by the requesting script through document.cookie or from response headers.


*/


const xhr = new XMLHttpRequest();
x