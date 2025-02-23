class Person {
    name = ''
    age = 0
    bio = ''

    constructor(name, age, bio) {
        this.name = name
        this.age = age
        this.bio = bio
    }

    info() {
        console.log("Людина" + this.name + ".Вік" + this.age + ".Bio" + this.bio);
    }
}

var alex = new Person('Alex', 25, 'Some bio');

var bob = new Person('Bob', 30, 'Some new bio');


alex.info();
bob.info();