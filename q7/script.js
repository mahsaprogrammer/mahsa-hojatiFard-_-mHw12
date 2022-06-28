//
function event_function(e){
let span =document.getElementById('show_position');
span.innerHTML = e.pageX, e.pageY ;
console.log(span.innerHTML);

}

