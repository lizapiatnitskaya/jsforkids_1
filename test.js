function sumArray(array) {
  
    if (array.length>1){
    
   let sum=0;
   for (i=0;i<array.length;i++){
     sum+=array[i];
   }
   return sum - Math.max.apply(null, array) - Math.min.apply(null, array);
}
   else {return 0;}

 }
console.log(sumArray(null));