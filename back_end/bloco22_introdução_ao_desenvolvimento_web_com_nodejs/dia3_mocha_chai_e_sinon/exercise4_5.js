const fs = require('fs');

const archiveWriter = (name, content) => {
  fs.writeFileSync(name, content);
    return 'ok';
}

archiveWriter('arquivo.txt', 'exemplo');

module.exports = archiveWriter;