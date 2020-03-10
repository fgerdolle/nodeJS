const inputFolder = './input/';

const fs = require('fs');

fs.readdir(
    inputFolder,
    (err,files)=>{
        files.forEach(file=>{
            console.log(file);
  

        fs.readFile(inputFolder + file, 'utf8',
            (err,data)=> {
                if (err)throw err;

                console.log(file + ' >>>');
                console.log(data);
                console.log('<<<');
                }
            );
        })
        }
);
