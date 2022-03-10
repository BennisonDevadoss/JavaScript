function nyFunction(str) {
    let newstr = [];
    let arr = []
    arr = str.split("")
    console.log(arr);
    newarr = arr.filter((element, index) => {
        if (index < 3) {
            return element;
        }
    })
    console.log(newarr.join(""));
}
nyFunction("ahsdf"); 