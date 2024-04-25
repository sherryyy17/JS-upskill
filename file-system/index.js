const fs = require('fs-extra'),
    path = require('path')

const orgfilePath = path.join(__dirname,'myfile.txt');
const newFile = 'test.txt';

fs.readFile(orgfilePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        console.log('received data: ' + data);
        fs.writeFile(newFile, data, (err) => {
            if (err) {
              console.error('Error writing to file:', err);
            } else {
              console.log('Data written to file successfully.');
            }
          });
    } else {
        console.log(err);
    }
});

fs.copy(orgfilePath, './mynewCopyfile', function (err) {
    if (err) return console.error(err)
    console.log("Copy success!")
  })

//async methods
const dir = path.join(__dirname,'newDirectory')
fs.ensureDir(dir, err => { //creates new directory if not exist
  console.log(err)
})

const src = path.join(__dirname,'testMoveFile.txt')
const dest = path.join(__dirname,'newDirectory','xyz.txt')
fs.move(src, dest, err => {
  if (err) return console.error(err)
  console.log('move success!')
})