/* In javascript every array, object and function have Prototypes. 
Prototype chains ===> For example
a = [1, 2, 3, 4]
a.__proto__   -->    a.__proto__.__proto__  
This is prototype chain  The second one is equal to Array.prototype. 
 a.__proto__.__proto__.__proto__    // null

If i have a function fun()
fun.__proto__.__proto__ is equal to Function.prototype */

let Detail = {
    name: "Bennison",
    city: "tirunelveli",
    method: function () {
        console.log(this.name, "from", this.city);
    }
}

Detail.method();
console.log(Detail.__proto__);   //   ----->   1
console.log(Detail.__proto__.__proto__);  // ---->   2
console.log(Object.prototype);     // -----> 3
// The console 2 and 3 are equal.



// Now I create another object Detail2
let Detail2 = {
    name: "Gibson"
}

// Never do this method...  This is not right way to do this... 
Detail2.__proto__ = Detail;

console.log(Detail2.name);
console.log(Detail2.city);  // Tirunelveli
Detail2.method();  // Gibson from tirunelveli. 


// .....Same method is applied to function and array.....



