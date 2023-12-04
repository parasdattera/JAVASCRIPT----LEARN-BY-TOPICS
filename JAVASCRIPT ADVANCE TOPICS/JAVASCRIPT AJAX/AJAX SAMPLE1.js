document.getElementById("btn-ajax").addEventListener("click",makeRequest);

function makeRequest(){
    console.log("Button click")

    const xhr = new XMLHttpRequest();
    xhr.open("GET","data.txt",true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                console.log(xhr);
                console.log(xhr.responseText);
                document.getElementById("demo").innerHTML = this.responseText;
            }else{
                console.log("Problem Occurred")
            }
        }
    };
    xhr.send();
}