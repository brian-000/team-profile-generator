const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(data) {
        super(data);
        const { name, id, email, github } = data;
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Engineer";
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return this.role;
    }
}

module.exports = Engineer;