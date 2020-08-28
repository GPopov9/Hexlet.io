import path from 'path';
import fs from 'fs';
import JsonParser from './parsers/JsonParser.js';
import YamlParser from './parsers/YamlParser.js';
import Config from './Config.js';

// BEGIN (write your solution here)
const mapping = {
  json: JsonParser,
  yml: YamlParser,
  yaml: YamlParser,
}

class ConfigFactory {
    static factory(filePath) {
    const type = path.extname(filePath).slice(1);
    const parser = new mapping[type]();

    const rawData = fs.readFileSync(filePath).toString();
    const data = parser.parse(rawData);

    return new Config(data);
  }
}

export default Confi