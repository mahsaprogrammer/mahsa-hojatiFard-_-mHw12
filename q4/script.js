
//
const items = document.querySelector('ul');
items.addEventListener( 'click' , function(event){
if(event.target.tagName == 'li'){
   event.target.classList.toggle('clicked');

}

},false);
