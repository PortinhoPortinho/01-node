const fs = require('fs');
/*
const textIn = fs.readFileSync('./txt/input.txt', 'utf8');
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!!');*/

//non-blocking, asynchronous way to read and write files
fs.readFile('./txt/start.txt', 'utf8', (err, data1) => {
    if (err) return console.log('ERROR! 💥');
  fs.readFile(`./txt/${data1}.txt`, 'utf8', (err, data2) => {
    console.log(data2);
    fs.readFile('./txt/append.txt', 'utf8', (err, data3) => {
      console.log(data3);

      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf8', (err) => {
        console.log('Your file has been written');
      });
    });
  });
});

console.log('Will read file!');