//задаем объект
let dog={
    name:"Оладушек",
    age:5,
    color: "black"
};
console.log(dog.name);

//показыват все ключи объекта
console.log(Object.keys(dog));
let cat = {};
cat.name="Василий";
cat.age=2;
cat.color="white";
console.log(cat);

//доступ к ключам-свойствам объекта через массив
let anna={hair:"black", age:16};
let dave={hair:"white", age:17};
let kate={hair:"brown",age:17};
let friends=[anna,dave,kate];
console.log(friends[1]);