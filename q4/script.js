
//
const items = document.querySelector('ul');
items.addEventListener( 'click' , function(event){
if(event.target.tagName == 'LI'){
   event.target.classList.toggle('clicked');

}

},false);
