let msg = "Hello World ! "

console.log(msg);

let arrayMessages = ["vive","la","DTA","!"];

for (let iterMSG of arrayMessages){
    console.log(iterMSG);
}
/*
function User(name, age){
    this.name= name;
    this.age = age;
    this.sayHi = function(){
        return (this.name + " à " + this.age + " ans");
    };
}
*/
class User {
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
    sayHi(){
        return (this.name + " à " + this.age + " ans");

    }
}

let user1 = new User("Franck",31);
let user2 = new User("Vincent", 29);
let user3 = new User("Thibaut", 22);

let usersArray = [];
usersArray.push(user1);
usersArray.push(user2);
usersArray.push(user3);

for (let user of usersArray){
    console.log(user.sayHi());
}