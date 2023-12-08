/*

The Fetch API or Fetch method provides an interface for fetching resources (including across the network).

It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

why use fetch? -- jquery has disadvantage that we need to process complete jquery file which makes loading time to increase and also while using AJAX we need to write complex lengthy queries that also is not good thats why fetch is used nowadays.

syntax - fetch(file/url)

fetch(file/url); ---> returns promise

fetch(file/url).then(); ---> returns promise

fetch(file/url).then(function(response){
    return response.data;
});   ---> returns promise so we need to use one more then and create a function inside it

data -- text or json


main syntax --

------------------------------------------------
fetch(file/url).then(function(response){
    return response.data;
}).then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
});
------------------------------------------------



*/

// sample -- getting text file

function clickevent() {

    fetch("data.txt").then((response) => {
        return response.text();
    }).then((data) => {

        document.getElementById("demo").innerHTML = data
        console.log(data)
    })

}


// sample -- getting json data from website

function clickevent2(){
    fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data);
        for(var x in data){
            document.write(`${data[x].name} - ${data[x].address.city} - ${data[x].email} <br>`)
        }
    })
}
        

// sample -- getting json data from local file

function clickevent3(){
    fetch("data2.json").then((response)=>response.json()).then((data)=>{
        console.log(data);
        document.getElementById("demo3").innerHTML = `${data[0].name} - ${data[0].age} - ${data[0].city} <br> ${data[1].name} - ${data[1].age} - ${data[1].city} <br> ${data[2].name} - ${data[2].age} - ${data[2].city}`
    })
}


// saving data on server -- updating , inserting , editing of data  -- using POST , PUT , DELETE

/* syntax -- for reading data the syntax for fetch is -- fetch(url) but for inserting , updating or creating new data we need to insert the optional parameter values and the syntax for it --

fetch(url,{
    method: 'POST'/'PUT'/'DELETE,
    body: data -- form data/ JSON data / text
    header: {
        'Contect-Type': 'application/json'/'application/x-www-form-urlencoded'
    }
})

*/



// sample -- inserting/creating data into json   -- POST METHOD


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({ // stringify used to convert data into json data
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


// sample -- updating data -- PUT METHOD

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));



// for deleting data we need to just declare the method and and url of the data

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});


// sample -- getting data for inserting or updating on server by form from html


document.getElementById("saveForm").addEventListener("click",function(e){
    
e.preventDefault();

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: new FormData(document.getElementById("myForm")),
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

})