var mother = require('../index');
var myfilter = require('colors');
var  text = mother.yell('Mother: Get Up');
console.log(myfilter.green(text.replace('Get Up','No school, Sleep in').replace('Mother','I hear from Mother')));

var text1 = mother.congrad('Mother:Good Job');
console.log(myfilter.green(text1).replace('Mother','my Echo'));

var text2 = mother.consult('Mother: You should do your homework');
console.log(myfilter.green(text2.replace('homework', 'game').replace('Mother','My echo')));
