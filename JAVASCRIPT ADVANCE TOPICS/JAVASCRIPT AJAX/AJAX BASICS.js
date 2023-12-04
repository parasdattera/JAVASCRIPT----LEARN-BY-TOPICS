/*

AJAX - Asynchronous JavaScript and XML(data format)

technique for creating fast and dynamic web pages.

it allows to get content from web server without reloading the page

HTML, CSS for representation, JSON/XML/Text for storing Data, XMLHttpRequest (XHR) an API or Object for action in the background and JavaScript put all this together.

Ajax is a web development technique which helps to create highly responsive, near desktop software like user experience web applications.

Ajax is used in web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This makes possible to update parts of a web page, without reloading the whole page.

ajax is not programming language it is a web development technique

features / why use of ajax --

No Page Reload on each request
Update a Part page not full page
Send Data to server in background
Receive Data from server in background
Better User experience
Improves Speed and Performance


*/

// sample -- Make an HTTP Request using "GET" method

// creating XMLHttpRequest object -- let/const/var var_name = new XMLHttpRequest();

const xhr = new XMLHttpRequest();

//Initialize created request
xhr.open("GET","data.text",true);

//Send The Request
xhr.send();



// sample -- Make an HTTP Request using "POST" method


const xhr2 = new XMLHttpRequest();

//Initialize created request
xhr2.open("POST","data.php",true);

//For POST method we have to set request header before sending request
xhr2.setRequestHeader('Context-Type','application/JSON')

//Send The Request
xhr.send(body);


/*

Handling Server Response 

After making a request, you will receive a response back.

At this stage, you need to tell the XMLHttpRequest object which JavaScript function will handle the response, by setting the onreadystatechange property of the object and naming it after the function to call when the request changes state.

xhr.onreadystatechange = nameOfTheFunction;

function nameOfTheFunction() {
}

Using Anonymous Function

xhr.onreadystatechange = function() {
// Process the server response here.
};

Using Arrow Function
xhr.onreadystatechange = ( ) {
// Process the server response here.
}


*/

// sample -- handling server response

xhr.onreadystatechange = showdata;

function showdata(){
    /*
    First, the function needs to check the request's state. If the state has the value of XMLHttpRequest.DONE (corresponding to 4), that means that the full server response was received and it's OK for you to continue processing it.
     */
    
    // process the server response here.

    if(xhr.readyState === XMLHttpRequest.DONE){
        //everything is good, the response was received.
        if(xhr.status === 200){
            //perfect
            // main code to what to do with data
        }else{
            // there was problem with the request.
            // status 404 or 500 
        }
    }else{
        //server not recieved response
    }
}