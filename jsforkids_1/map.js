function squareSum(numbers){
    /*создаёт новый массив, который будет состоять из результатов вызова 
    callback(item, i, arr) для каждого элемента arr.*/
    let squares=numbers.map(function(num){ 
      return num*num;
    }
    )
    let result=squares.reduce(function(sum,current){
      return sum+current;
    },0)
    return result;
   }
   console.log(squareSum([1,2]));