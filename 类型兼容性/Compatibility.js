var Person;
(function (Person) {
    Person[Person["name"] = 0] = "name";
    Person[Person["age"] = 1] = "age";
    Person[Person["love"] = 2] = "love";
})(Person || (Person = {}));
var age = Person[2];
console.log(age);
