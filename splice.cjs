const fs = require('fs');
const lines = fs.readFileSync('src/pages/Home.jsx', 'utf8').split('\n');
const newLines = fs.readFileSync('src/pages/new_sections.jsx', 'utf8').split('\n');

// We want to replace lines 703 to 1097.
// In 0-indexed array, that's indices 702 to 1096.
// Splice takes (start, deleteCount, ...items)
// start = 702
// deleteCount = 1096 - 702 + 1 = 395
lines.splice(702, 395, ...newLines);

fs.writeFileSync('src/pages/Home.jsx', lines.join('\n'));
console.log('Successfully spliced Home.jsx!');
