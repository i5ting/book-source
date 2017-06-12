const java = require(".")
const ArrayList = java.import('java.util.ArrayList')

let list = new ArrayList()
list.addSync("1")
list.addSync("2")
list.addSync("3")
list.addSync("4")
list.addSync(3, "5")

console.log(list.toStringSync())