function count(){
    let start = document.getElementById('textstart').value;
    let end = document.getElementById('textend').value;
    let step = document.getElementById('textstep').value;
    let res = document.getElementById('res');

    if (start.length == 0 | end.length == 0 | step.length == 0){
        window.alert('[ ERROR ] Please, fill all the fields correctly!');
    } else {
        res.innerHTML = 'Counting: <br>';
    }
}