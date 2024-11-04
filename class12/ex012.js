var now = new Date()
var time = now.getHours()

if (time < 12){
    console.log('Good Morning!')
} else if (time <= 18){
    console.log('Good Afternoon!')
} else if (time > 18 && time <= 24){
    console.log('Good Night / Good Evening!')
} else {
    console.log("It's not a valid time")
}