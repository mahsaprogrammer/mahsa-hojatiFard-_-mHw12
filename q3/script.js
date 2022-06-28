
//step1
const cta =document.querySelector('.cta_container');
const btn = document.querySelector('.cta_button');
const h1 = document.getElementsByTagName('h1');
btn.addEventListener('click', function(e){
    h1[0].innerText = e.target.tagName;
  console.log(h1);
    
});