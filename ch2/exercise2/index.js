const fs = require('fs');
const path = require('path');
const util = require('util');


const readdir = util.promisify(fs.readdir);

const readDirectory = async root => {
    try {
        const files = await readdir(root, { withFileTypes: true });
        for (const file of files) {
            fn = file.name
            if (file.isDirectory()) readDirectory(path.join(root, fn));
            if (path.extname(fn) === '.js') console.log(path.join(file.path, fn));
        }
    } catch (err) {
        console.error(err);
    }
};

readDirectory('./');