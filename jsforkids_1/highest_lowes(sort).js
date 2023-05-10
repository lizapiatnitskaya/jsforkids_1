function highAndLow(numbers){
  let arr=numbers.split(" ");
   arr=arr.sort(function(a,b){
    return b-a;
   });
   console.log(arr);
   return arr[0]+" "+arr[arr.length-1];
 }
 console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));