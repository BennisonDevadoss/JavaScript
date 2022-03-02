const http = new XMLHttpRequest();

const url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin";

http.open("GET", url);
http.send();

http.onreadystatechange = function (event) {
    console.log(http.responseText);
}