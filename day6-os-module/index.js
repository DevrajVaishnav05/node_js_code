const os = require("os")
console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())
console.log(os.type())

// freeMemory find
const freememeory = os.freemem()
console.log(`${freememeory/1024/1024/1024}`)

// total Memory
const totalmemory = os.totalmem()
console.log(`${totalmemory/1024/1024/1024}`)
