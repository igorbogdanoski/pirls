const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
const lines = fs.readFileSync(appPath, 'utf8').split('\n');

// Find the line that starts with "import React" (the second occurrence)
let startLine = -1;
let foundFirst = false;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim().startsWith('import React')) {
    if (foundFirst) {
      startLine = i;
      break;
    }
    foundFirst = true;
  }
}

if (startLine !== -1) {
  const newContent = lines.slice(startLine).join('\n');
  fs.writeFileSync(appPath, newContent);
  console.log(`Successfully recovered App.jsx from line ${startLine + 1}`);
} else {
  console.log('Could not find the second "import React" line.');
}
