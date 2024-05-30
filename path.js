// var allcontrollers = [
//     {
//         company: "sony",
//         type: "PS5",
//         price: "5000",
//     },
//     {
//         company: "sony",
//         type: "PS4",
//         price: "4000",
//     },
//     {
//         company: "Microsoft",
//         type: "XBOX1",
//         price: "3000",
//     },
// ];

// var controllerDiv = document.getElementById("controllers");

// function getItem(ele) {
//     console.log("element==>", ele.id);


//     var index = parseInt(ele.id);
//     allcontrollers.splice(index, 1);
//     console.log("allcontrollers updated=>", allcontrollers);
//     showAllData();
// }

// function showAllData() {
//     controllerDiv.innerHTML = "";
//     allcontrollers.forEach(function (data, ind) {
//         var ele = `<div onclick="getItem(this)" id="${ind}">${data.price} - ${data.company} - ${data.type}</div>`;
//         controllerDiv.innerHTML += ele;
//     });
// }

// showAllData();
var allcontrollers = [
    {
        company: "Sony",
        type: "PS5",
        price: "5500",
    },
    {
        company: "Sony",
        type: "PS4",
        price: "4500",
    },
    {
        company: "Microsoft",
        type: "XBOX1",
        price: "3500",
    },
    {
        company: "Nintendo",
        type: "Switch",
        price: "4000",
    },
];

var controllerDiv = document.getElementById("controllers");

function getItem(ele) {
    console.log("element==>", ele.id);

    var index = parseInt(ele.id);
    allcontrollers.splice(index, 1);
    console.log("allcontrollers updated=>", allcontrollers);
    showAllData();
}

function showAllData() {
    controllerDiv.innerHTML = "";
    allcontrollers.forEach(function (data, ind) {
        var ele = `<div onclick="getItem(this)" id="${ind}">${data.price} - ${data.company} - ${data.type}</div>`;
        controllerDiv.innerHTML += ele;
    });
}

showAllData();












// function Student(name, father, rollno) {
//     console.log(this);
//     this.name = name

//     this.father = father
//     this.rollno = rollno
// }
// var student1 = new Student("hassan", "rehan", "347729")
// var student1 = new Student("n", "rn", "3429")
// var student1 = new Student("an", "rn", "34729")