const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
const content = fs.readFileSync(appPath, 'utf8');

// Find the LAST occurrence of "import React"
const keyword = 'import React, { useState, useRef, useEffect } from \'react\';';
const lastIndex = content.lastIndexOf(keyword);

if (lastIndex !== -1) {
  const newContent = content.substring(lastIndex);
  fs.writeFileSync(appPath, newContent);
  console.log(`Successfully recovered App.jsx from the last valid start point (index ${lastIndex})`);
} else {
  console.log('Could not find the "import React" line.');
}
