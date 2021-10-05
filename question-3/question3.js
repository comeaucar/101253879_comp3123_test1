const fs = require('fs');
const createLogs = () => {
    return new Promise((resolve, reject) => {
    const directory = "./logs";
    if(!fs.existsSync(directory)){
        fs.mkdirSync(directory);
    }
    process.chdir(directory)

    for(let i = 0; i < 10; i++){
        fs.writeFile(`log${i + 1}.txt`,  `Log file ${i + 1}`, (error) => {
            error ? console.log(`Error creating file log${i + 1}.txt`) : console.log(`log${i + 1}.txt`)
        })
    }
    resolve()
})}

const removeLogs = () => {
    return new Promise((resolve, reject) => {
    const directory = "./logs"
    if(fs.existsSync(directory)){
       process.chdir(directory);
       fs.readdir(process.cwd(), (error, files) => {
           files.forEach((x) => {
               fs.unlink(x, (error) => {
                   error ? console.log(`Error deleting file ${x}`) : console.log(`delete files...${x}`)
               })
           })
       }) 
       resolve()
    }
})}

const removeDirectory = () => {
    if(fs.existsSync("./logs")){
        fs.rmdirSync("./logs")
    }
}

createLogs().then(removeLogs).then(removeDirectory).catch((err) => console.log(err));

