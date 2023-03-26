const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6288973078495'] // no own
global.author = 'Abil De Fuge' // nama author 
global.packname = 'babu abil whatsapp' // nama pack sticker
global.namabot = 'SHIRO BOT' // nama bot mu
global.group = 'https://chat.whatsapp.com/FcVEQtWtLOG5XHMFCIbP1c' // grup mu
global.pic = 'https://files.fm/u/2r8vyf6x4' // logo lu


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
