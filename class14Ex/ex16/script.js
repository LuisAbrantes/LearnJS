function count(){
    let start = document.getElementById('textstart');
    let end = document.getElementById('textend');
    let step = document.getElementById('textstep');
    let res = document.getElementById('res');

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        res.innerHTML = 'Impossible to count with empty fields!';
        window.alert('[ ERROR ] Please, fill all the fields correctly!');
    } else {
        res.innerHTML = 'Counting: ';
        let st = Number(start.value);
        let ed = Number(end.value);
        let sp = Number(step.value);
        if (sp <= 0){
            window.alert('[ ERROR ] Step can not be 0 or negative! Considering step = 1.');
            sp = 1;
        }
        if (st < ed) { // Counting up
            for (let c = st; c <= ed; c += sp){
                res.innerHTML += `${c} \u{1F449} `;
            }
            res.innerHTML += `\u{1F3C1}`;
        } else{ // Counting down
            for (let c = st; c >= ed; c -= sp){
                res.innerHTML += `${c} \u{1F449} `;
            }
            res.innerHTML += `\u{1F3C1}`;
        }
        
    }
}
