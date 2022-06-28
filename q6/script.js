
//
const h1 = document.getElementById('elemId');

h1.addEventListener('click', function (event) {

    h1.textContent = 'goodbuy';

    console.log(event.clientX);
    console.log(event.clientY);

});
