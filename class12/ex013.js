var now = new Date()
var weekDay = now.getDay()

/*
Sunday = 0
Monday = 1
Tuesday = 2
Wednesday = 3
Thursday = 4
Friday = 5
Saturday = 6
*/

// console.log(weekDay)
switch(weekDay){
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thurday')
        break
    case 5:
        console.log('Fruday')
        break
    case 6:
        console.log('Saturday')
        break
    default:
        console.log("Error: It's not a valid day.")
}