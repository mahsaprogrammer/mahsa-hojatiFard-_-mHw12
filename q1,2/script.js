const Name = document.getElementById('name-input');
Name.addEventListener('change', (e) => {

    if(Name.value == false ){
        alert('required a name .');
    }
    else{
        alert('valid:)');
    }

});

//step2
const email =document.getElementById('Email-input');
email.addEventListener( 'click' ,(e) =>{
const emailAdd =document.querySelector('#emailAdd');
emailAdd.innerHTML = email.value;
});

//step3
function submit(e){
    e.preventDefault ();

}
