
const fs = require('fs');
console.log('String 1');
const data = fs.readFileSync('./file.bin');
console.log(`Data length: ${data.length} bytes`);
console.log('String 2\n\n');


console.log('String 1');
fs.readFile('./file.bin', (err, data) => {
    if (!err) console.log(`Data length: ${data.length} bytes`);
    else console.error(err);
});
console.log('String 2\n\n');


const util = require('util');
const readFile = util.promisify(fs.readFile);
const printFileSize = async filename => {
    try {
        const data = await readFile(filename);
        console.log(`Data length: ${data.length} bytes`);
    } catch (err) {
        console.error(err);
    }
};
console.log('String 1');
printFileSize('./file.bin');
console.log('String 2');