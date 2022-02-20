const sharp = require('sharp');

const fs = require("fs")
const path = '../Cars/';



fs.readdirSync(path).forEach(async (file) => {
    let buffer = await sharp(`../Cars/${file}`).toBuffer();

        const metadata = await sharp(buffer).metadata();

        await sharp(buffer)
            .resize(metadata.width, metadata.height)            
            .png()            
            .toBuffer();

        await sharp(buffer)
            .trim()
            .toFile(`../CarsTrim/${file}`);
});

