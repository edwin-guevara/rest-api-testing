/*const fs = require('fs').promises;
const path = require('path');
class GenEd {
  async find(criteria = () => true) {
    const genedPath = path.join(__dirname, 'gened.json');
    const data = await fs.readFile(genedPath, 'utf-8');
    const geneds = JSON.parse(data);
    return geneds.filter(criteria);
  }
}
module.exports = new GenEd();*/
