const path = require("path");
console.log(path.dirname("D:/node_pro/day7-path-module/index.js"))
console.log(path.extname("D:/node_pro/day7-path-module/index.js"))
console.log(path.basename("D:/node_pro/day7-path-module/index.js"))

const data =  path.parse("D:/node_pro/day7-path-module/index.js")
console.log(data.root)