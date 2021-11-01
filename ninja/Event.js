var stuff=require('./stuff');

var events = require('events');

var util = require('util');

var person = function(name){
    this.name = name;
};

util.inherits(person, events.EventEmitter);

var m = new person("mita");
var t = new person("titli");
var k = new person("keny");

var people = [m,t,k];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: '+ mssg);
    });
});

m.emit('speak', 'hey this is mita');