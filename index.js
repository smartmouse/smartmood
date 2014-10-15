var color = require("colors/safe");

module.exports = {

yell:  function(text)
{

    
   
    var yellWhat = color.red( text.concat("%#$!!!!"));
    console.log(yellWhat);
    return yellWhat;

},

consult:  function(text)
{

    
   
    var consultWhat = color.blue( text.concat(", my 2 cents!"));
    console.log(consultWhat);
    return consultWhat;

},

congrad:  function(text)
{
  
     
    var congradWhat = color.yellow(text.concat(" :-)!"));
    console.log(congradWhat);
    return congradWhat;

}



}



