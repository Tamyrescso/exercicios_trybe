const fs = require('fs').promises;

const usingPromiseAll = async () => {
  const text =  ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  await Promise.all(
    text.map((string, index) => fs.writeFile(`./file${index + 1}.txt`, string))
  );

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const allContent = await Promise.all(
    fileNames.map((file) => fs.readFile(file, 'utf-8'))
  );

  const joinContents = allContent.join(' ');
  await fs.writeFile('./fileAll.txt', joinContents);
}

usingPromiseAll();