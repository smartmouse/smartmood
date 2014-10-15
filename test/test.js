var should = require('chai').should(),
    mother = require('../index'),
    color = require('colors'),
    yell = mother.yell,
    consult = mother.consult,
    congrad = mother.congrad;


describe('#yell', function() {
  it('converts text into text%#$!!!! ', function() {
    yell(String('go to bed')).should.equal(color.red('go to bed%#$!!!!'));

   });
});  
     

describe('#consult', function() {
  it('converts text into text, my 2 cents.', function() {
    consult(String('Invest in HealthCare sectors now')).should.equal(color.blue('Invest in HealthCare sectors now, my 2 cents!'));

   });
});  


describe('#congrad', function() {
  it('converts text into text :-)!' , function() {
    congrad(String('Node.js , way to go')).should.equal(color.yellow('Node.js , way to go :-)!'));

   });
});  
