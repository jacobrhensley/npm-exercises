const $ = require('jquery');

const sayHello = ((name)=> {
console.log(`Hello ${name}`)
});

sayHello('Jacob');

$(document).ready(()=>{
    $('body').html(sayHello('Jacob'));
});