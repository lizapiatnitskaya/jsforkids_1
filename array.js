function sumArray(array) {
  
    if (!Array.isArray(array)) {
        console.log("hello");
        return 0;
      }
    else {
    
   let sum=0;
   for (i=0;i<array.length;i++){
     sum+=array[i];
   }
   return sum - Math.max.apply(null, array) - Math.min.apply(null, array);
}
console.log(sumArray(null));
}