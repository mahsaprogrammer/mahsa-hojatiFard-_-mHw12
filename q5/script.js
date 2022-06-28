//step1
const div = document.getElementById('buttons');
div.addEventListener('click', function (event) {

    if (event.target.className == "buttonClass") {
        alert('button class');
    }
    else {
        alert('click!');
    }
});
