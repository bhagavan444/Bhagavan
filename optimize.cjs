const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
};

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  if (content.includes('framer-motion')) {
    const orig = content;
    // Replace import { motion } with import { m }
    content = content.replace(/import\s+\{([^}]*)motion([^}]*)\}\s+from\s+['"]framer-motion['"]/g, (match, p1, p2) => {
      // If m is already there, just remove motion
      if (p1.includes('m,') || p2.includes(', m') || p1.includes(' m ') || p2.includes(' m ')) {
         return match.replace(/motion\s*,?/, '');
      }
      return match.replace('motion', 'm');
    });

    content = content.replace(/<motion\./g, '<m.');
    content = content.replace(/<\/motion\./g, '</m.');
    
    // Add loading="lazy" to imgs without it
    content = content.replace(/<img(?![^>]*loading=)/g, '<img loading="lazy"');
    
    if (orig !== content) {
      fs.writeFileSync(file, content);
      console.log('Updated ' + file);
    }
  }
});
