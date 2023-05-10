//метод свертки, действует слева направо
let arr=[1,2,3,4,5];
let result = arr.reduce(function(sum,current){
    return sum+current;
}
,0)
console.log(result);
/*
0-значение функции в самом начале
Аргументы функции callback(previousValue, currentItem, index, arr):

previousValue – последний результат вызова функции, он же «промежуточный результат».
currentItem – текущий элемент массива, элементы перебираются по очереди слева-направо.
index – номер текущего элемента.
arr – обрабатываемый массив.
*/