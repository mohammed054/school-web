const fs = require('fs');
const path = require('path');

const basePath = '/school-web';
const targetExtensions = ['.html', '.jsx', '.css'];
const searchPattern = /\/images\//g;
const replaceWith = `${basePath}/images/`;

// Function to process a file
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updatedContent = content.replace(searchPattern, replaceWith);

  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);

  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && item !== 'node_modules' && item !== '.git') {
      processDirectory(fullPath);
    } else if (stat.isFile() && targetExtensions.includes(path.extname(fullPath))) {
      processFile(fullPath);
    }
  });
}

// Start processing from current directory
console.log('Starting to fix image paths...');
processDirectory('.');
console.log('Done!');

module.exports = { processFile, processDirectory };
