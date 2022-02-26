let obj =
    [
        {
            "id": 1,
            "name": "enp1",
            "type": "LAN",
            "id_address": [
                "192.168.1.1",
                "192.168.1.2",
                "192.168.1.3"
            ]
        },
        {
            "id": 2,
            "name": "enp2",
            "type": "WAN",
            "id_address": [
                "192.168.2.1",
                "192.168.2.2",
                "192.168.2.3"
            ]
        },
        {
            "id": 3,
            "name": "enp3",
            "type": "LAN",
            "id_address": [
                "192.168.3.1",
                "192.168.3.2",
                "192.168.3.3"
            ]
        },
        {
            "id": 4,
            "name": "enp4",
            "type": "LAN",
            "id_address": [
                "192.168.5.1",
                "192.168.5.2",
                "192.168.5.3"
            ]
        }
    ]
let newarr = [];

console.log("...........................Method One to find the lAN............................................");
for (i = 0; i < obj.length; i++) {
    if (obj[i].type === "LAN") {
        newarr.push(obj[i])
    }
}

console.log(newarr);

//.............................method two......................................//
console.log(".................................method two to find the LAN......................................");
let newarr1 = [];
newarr1 = obj.filter((value) => {
    return value.type === "LAN";
});

console.log(newarr1);


console.log("................................WAN object(Find the WAN Objects)...................................");

let wan = obj.filter((value) => {
    return value.type === "WAN";
});
console.log(wan);

//Find the name “enp1” in the above array and print only ip_address?
console.log(".............................  ..Find id_address of enp1............................................");
let id;
obj.filter((value) => {
    if (value.name === "enp1") {
        id = value.id_address;
    }
})
console.log(id);

console.log("Find the given names “enp3”, “enp4” from the above array and print the ip_address in a one-dimensional array?");

let id1 = [];
let arr1 = [];
let arr2 = [];
// obj.filter((value) => {
//     if (value.name === "enp3") {
//         arr1 = value.id_address;
//         // id1= [...arr1]; 
//     }
//     if (value.name = "enp4") {
//         arr2 = value.id_address;
//     }
// })
// id1 = [...arr1, ...arr2];

// console.log(id1);
//.........................................//

obj.filter((value) => {
    if (value.name === "enp3" || value.name === "enp4") {
        id1.push(...value.id_address);
    }
})

console.log(id1); 