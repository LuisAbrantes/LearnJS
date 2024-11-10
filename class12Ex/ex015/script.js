function verify(){
    var data = new Date()
    var year = data.getFullYear()
    var formYear = document.getElementById('textYear')
    var res = document.querySelector('div#result')
    if (formYear.value.length == 0 || Number(formYear.value) > year){
        window.alert('[ERRO] Verify the data and try again!')
    } else{
        var formSex = document.getElementsByName('radiosex')
        var age = year - Number(formYear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
            // <img id="photo">
        if(formSex[0].checked){
            gender = "Man"
            if(age >= 0 && age < 10){
                // Kid
                img.setAttribute('src', 'babyMan.jpg')
            }
            else if (age < 21){ 
                // Young
                img.setAttribute('src', 'youngMan.jpg')
            }
            else if (age < 50){
                // Adult
                img.setAttribute('src', 'adultMan.jpg')
            } else {
                // Old
                img.setAttribute('src', 'oldMan.jpg')
            }   
        } else if (formSex[1].checked) {
            gender = 'Woman'
            if(age >= 0 && age < 10){
                // Kid
                img.setAttribute('src', 'babyWoman.jpg')
            }
            else if (age < 21){ 
                // Young
                img.setAttribute('src', 'youngWoman.jpg')
            }
            else if (age < 50){
                // Adult
                img.setAttribute('src', 'adultWoman.jpg')
            } else {
                // Old
                img.setAttribute('src', 'oldWoman.jpg')
            }   
        }
        res.style.textAlign = 'center'
        res.innerHTML = `We detected ${gender} with ${age} years old`
        res.appendChild(img)
    }
}