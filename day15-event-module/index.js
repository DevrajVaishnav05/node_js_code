const EventEmitter = require('events')

const event = new EventEmitter();

// event.on("sayHello", () => {
//     console.log("Your name is Devraj ")
// })
// event.on("sayHello", () => {
//     console.log("Your name is Dayal ")
// })

// event.on("sayHello", () => {
//     console.log("Your name is Madan ")
// })

event.on("chackPage", ( st, mgs) => {
    console.log(`Status code is : ${st}  \nMessage : ${mgs} `)
})
event.emit("chackPage",200,"I am happy")
// event.emit("sayHello")