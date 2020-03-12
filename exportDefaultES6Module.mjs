class Player {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}

export default Player;