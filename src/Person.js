class Person{
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    toString() {
        return `Id:${this.id}\nName:${this.name}\nEmail:${this.email}`;
    }
}

export default Person;