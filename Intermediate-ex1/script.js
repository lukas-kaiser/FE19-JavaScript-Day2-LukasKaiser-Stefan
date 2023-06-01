const str = "hellohello"
const capitalize = (function(){
    str.charAt(0).toUpperCase() + str.slice(1); 
}());

console.log(capitalize);