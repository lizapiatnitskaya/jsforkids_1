function findShort(s){
  s=s.split(" ");
  console.log(s);
  let low = s.map(function(num){
    console.log(num.length);
    return num.length;
  })
  console.log(Math.min(...low));
  return Math.min.apply(null,low);
}
console.log(findShort("bitcoin take over the world"));