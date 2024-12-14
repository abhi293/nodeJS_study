// const cp = require('child_process')

// cp.execSync('start Chrome https://www.youtube.com/')  //this will open this specific website in the chrome

const ops = require('os')  //imports os related library i.e cpu , gpu, platform, etc

const paths = require('path')  //related to acquiring paths of files/dirs

const files = require('fs')  //fileSystem...allows to work with files

//files.readFileSync('addr of file')           //read the contents of files ...remember to use + instead of , while printing
//files.writeFileSync('addr of file')         //write contents in a file...deleting previous contents...and if file doesn't exist, create file and then write
//files.appendFileSync('addr of file')        //update or append contents in a file...without deletion
//files.unlinkSync('addr of file')            //deleting a file
//files.mkdirSync('DirectoryName')            //to create a directory (or add path and the directory to create directory at the given location)
//files.existsSync('DirectoryName')           //boolean value...checks if dir or file exists or not
//files.rmdirSync('DirName')                   //removes an empty dir

let folders = files.readdirSync('C:\\Users\\anand\\OneDrive\\Desktop\\nodeJS')         //list the contents of folder
console.log('contents are ',folders)

console.log('extension of the file is '+paths.extname('C:\\Users\\anand\\OneDrive\\Desktop\\nodeJS\\test.js')) //extension name of the given path

console.log(paths.basename('C:\\Users\\anand\\OneDrive\\Desktop\\nodeJS\\test.js')) //filename of the given path

console.log(__filename) //current working full path

console.log(__dirname) //current working directory

// console.log(ops.cpus())
// console.log(ops.networkInterfaces())

console.log(ops.arch())
console.log(ops.platform())