// the shortcut to use Node.js Exec in Mac is: fn + F8
var maxVel = Number(prompt('Enter the max velocity: '))
var yourVel = Number(prompt('Enter your velocity: '))
var dif = maxVel - yourVel
if (yourVel > maxVel){
    console.log(`You are ${dif} velocity units above the limit! - You are fined!`)
}
console.log('The console run correctly!')