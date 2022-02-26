/* Object Entries Example: 2*/
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj));
/* [ [ 'foo', 'bar' ], [ 'baz', 42 ] ] */

const obj1 = { 0: "a", 1: "2", 2: "3" };
console.log(Object.entries(obj1));
/* [ [ '0', 'a' ], [ '1', '2' ], [ '2', '3' ] ] */

const obj2 = { 100: "a", 50: "b", 10: "c" };
console.log(Object.entries(obj2));
/* [ [ '10', 'c' ], [ '50', 'b' ], [ '100', 'a' ] ] */

const obj3 = Object.create({}, {
    getFoo: {
        value() {
            return this.foo;
        }
    }
})

obj3.foo = "bar";
console.log(Object.entries(obj3));
/* [ [ 'foo', 'bar' ] ] */

//Non-object propetys
console.log(Object.entries("Bennison"));
/* 
[ [ '0', 'B' ],
  [ '1', 'e' ],
  [ '2', 'n' ],
  [ '3', 'n' ],
  [ '4', 'i' ],
  [ '5', 's' ],
  [ '6', 'o' ],
  [ '7', 'n' ] ]
*/

/* returns an empty array for any primitive type except for strings (see the above example), since primitives have no own properties */
console.log(Object.entries(100));
/* [] */

const obj4 = { a: 1, b: 2, c: 4 };
for (const [key, value] of Object.entries(obj4)) {
    console.log(`${key}: ${value}`);
}
/* a: 1
b: 2
c: 4 */

Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
/*
foo: bar
baz: 42
 */

