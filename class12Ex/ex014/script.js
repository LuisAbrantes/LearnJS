function load(){
    var msg = window.document.getElementById('msg')
    var photo = window.document.getElementById('photo')
    var date = new Date()
    var hour = date.getHours()
    // var hour = 19
    msg.innerHTML = `Now it's ${hour} hours.`
    if(hour >= 0 && hour < 12){
        // Good Morning
        photo.src = 'morning.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hour >= 12 && hour < 18){
        // Good Afternoon
        photo.src = 'afternoon.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // Good Night
        photo.src = 'night.jpg'
        document.body.style.background = '#515154'
    }
}