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

// sample

function clickevent(data){
    
fetch("data.txt").then((response)=>{
    return response.text();
}).then((data)=>{
    
    document.getElementById("demo").innerHTML = data
    console.log(data)
})

}
