let script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/a076d05399.js';
const cuted = script.src.split('/');
console.log(cuted);
document.body.appendChild(script);
console.log(cuted[3]);