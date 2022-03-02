/* XMLHttpRequest (XHR) objects are used to interact with servers. */
const http = new XMLHttpRequest();

const url = "object.js";

//listen for stage change event
http.onreadystatechange = function () {

    // check for sucessful request status: 
    if (this.readyState == 4 && this.status == 200) {
        let json = JSON.parse(http.responseText);
        console.log(json);  // 

        // Extract properties from object. 
        let id = json.id;
        let name = json.name;

        // Update application view with received data
        let userId = document.getElementById("id");
        if (userId) userId.innerHTML = id;

        let userName = document.getElementById("name");
        if (userName) userName.innerHTML = name;
    }
};

// Execute request
http.open("GET", url);
http.send(); 