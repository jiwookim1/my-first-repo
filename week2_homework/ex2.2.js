const fs = require("fs");
const path = require("path");
const util = require("util");


const testfolder = './test';

const getDirectory = util.promisify(fs.readdir)


const getJSfile = (filepath) =>{
    if (path.extname(filepath) == ".js") {
        console.log(path.join(testfolder,filepath));
}};


const searchJavascript = async testfolder => {
    const files = await getDirectory(testfolder)
    files.forEach(file =>{ 
        getJSfile(file)
        if (file.fs.Stats.isDirectory()){
            searchJavascript(file)
        }
})
}

searchJavascript(testfolder);