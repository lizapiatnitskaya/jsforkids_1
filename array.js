var shoppingProduct=[];
shoppingProduct.push("Carrot","Bread","Milk","Cream","Bananas");

var lastProduct=shoppingProduct.pop();
shoppingProduct.shift();
shoppingProduct.unshift(lastProduct);//Добавление элементов в массив

console.log(shoppingProduct);
var shoppingOther =["Paper"];
var shoppingList=shoppingProduct.concat(shoppingOther);//Объединение массивов
console.log(shoppingList);

console.log(shoppingList.indexOf("Bread"));//Узнать индекс элемента в массиве

console.log(shoppingList.join(" "));//Превращаем массив в строку (разделитель )
