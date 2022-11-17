//__dirname - path to current directory
// process - info about env where the program is being excuted
console.log(__dirname)

require('./7-mind-grenade')

const os = require('os')

const user = os.userInfo()

console.log(user);
//method return sys uptimes in sec
console.log(`the sys uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);

const {readFileSync,writeFileSync} = require("fs")

const first = readFileSync('./content/first.txt','utf8')

const second = readFileSync('./content/subfolder/text.txt','utf8')

writeFileSync('./content/result-sync.txt',`here is the result: ${first}, ${second}`, { flag :'a'})