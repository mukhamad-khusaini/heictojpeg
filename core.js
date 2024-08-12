const fs = require("fs");
const path = require("path");

function listHEICImagePaths(dir) {
  let imagePaths = [];
  const files = fs.readdirSync(dir);

  for (let i = 0; i < files.length; i++) {
    const filePath = path.join(dir, files[i]);
    const stats = fs.statSync(filePath);

    if (stats.isFile() && [".HEIC"].includes(path.extname(filePath))) {
      imagePaths.push(filePath);
    }
  }

  return imagePaths;
}

const imagePaths = listHEICImagePaths("img");
console.log(imagePaths);
