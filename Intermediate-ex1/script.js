/*const capitalize = string => console.log(string.charAt(0).toUpperCase() + string.slice(1)); 
capitalize("hello would you look at this capitalized sentence?"); */

const capitalize = (function() {  
    let string = "hello would you look at this capitalized sentence?"
    console.log(string.charAt(0).toUpperCase() + string.slice(1));
  }());
