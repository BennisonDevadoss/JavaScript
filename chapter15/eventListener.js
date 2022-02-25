function eventListener() {
    let calling = () => {
        console.log(this);
        console.log("Click event is called");
    }
    document.addEventListener("click", calling);
}
eventListener(); 