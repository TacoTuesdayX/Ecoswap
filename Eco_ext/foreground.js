



window.onclick = e => {
    var imgUrl=(e.target.getAttribute("src"));  // to get the element
    console.log(imgUrl);
    
}


document.addEventListener("click", function(){
    
    

    const req = new XMLHttpRequest();
    const baseUrl = "https://localhost:3000/test";
    

    req.open("POST", baseUrl, true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(imgUrl);

    req.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("Got response 200!");
        }
        else{
            window.location.replace("http://localhost:5000/store.html#");
        }
        
    }



});





