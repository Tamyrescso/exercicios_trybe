const getRepos = require('../src/getRepos');

test('check if returns the repository sd-01-week4-5-project-todo-list in the array', async () => {
    await expect(getRepos('https://api.github.com/orgs/tryber/repos')).resolves.toContain('sd-01-week4-5-project-todo-list');
})
test('check if returns the repository sd-01-week4-5-project-meme-generator in the array', async () => {
    await expect(getRepos('https://api.github.com/orgs/tryber/repos')).resolves.toContain('sd-01-week4-5-project-meme-generator');
})