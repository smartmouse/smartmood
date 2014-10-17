var color = require("colors/safe");
// set mood
color.setTheme({
  happy: 'rainbow',
  down: 'grey',
  anxious: 'cyan',
  tired: 'grey',
  derermined: 'green',
  bored:'grey', 
  lonely: 'grey',
  annoyed: 'red',
  cheerful: 'yellow',
  calm: 'blue',
  energetic: 'yellow',
  curious: 'cyan', 
  naughty: 'rainbow',
  moody: 'red', 
  angry: 'red'
});


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

},


moodify: function(mood,smartmsg) 
{

     
      switch (mood) {
      case "happy": 
            return color.happy(smartmsg); 
            
      
      case "down": 
            return color.down(smartmsg); 
            
      
      case "anxious": 
            return color.anxious(smartmsg); 
            
      case "tired": 
            return color.tired(smartmsg); 
            
      
      case "bored": 
            return color.bored(smartmsg); 
            
      
      case "lonely": 
            return color.lonely(smartmsg); 
            
      case "moody": 
            return color.moody(smartmsg); 
                  
      case "angry": 
            return color.angry(smartmsg); 
            
      
      case "curious": 
            return color.curious(smartmsg); 
            
      case "moody": 
            return color.moody(smartmsg); 
            
      
      case "calm": 
            return color.calm(smartmsg); 
            
      
      case "determined": 
            return color.determined(smartmsg); 
            
      case "cheerful": 
            return color.cheerful(smartmsg); 
            
      
      case "annoyed": 
            return color.annoyed(smartmsg); 
            
      
      case "energetic": 
            return color.energetic(smartmsg); 
            
      default:
            return color.cheerful(smartmsg);
            
      

      } 

}


}



