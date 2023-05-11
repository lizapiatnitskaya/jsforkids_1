let string="javascript is awesome";
let hacker_string="";
function hacker(letter){
    switch(letter){
        case "o":
            hacker_string+="0";
            break;
        case "i":
            hacker_string+="1";
            break;
        case "s":
            hacker_string+="$";
            break;
        default:
            hacker_string+=letter;
            break;
    }
console.log(hacker_string);
}
for(i=0;i<string.length;i++){
    hacker(string[i]);
}