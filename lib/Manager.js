const Employee = require("./Employee");

class Manager extends Employee {
    constructor(data) {
        super(data);
        const { name, id, email, officeNumber } = data;
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }

    getRole(){
        return this.role;
    }
    officeNumber(){
        return this.officeNumber;
    }


}

module.exports = Manager;