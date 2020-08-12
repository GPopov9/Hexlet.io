TUTOR

/* export default class {
  constructor(pathToConfigs) {
    this.pathToConfigs = pathToConfigs;
  }

  load(env) {
    const fileName = `database.${env}.json`;
    const filePath = path.join(this.pathToConfigs, fileName);
    const raw = fs.readFileSync(filePath);
    const config = JSON.parse(raw);

    if (!_.has(config, 'extend')) {
      return config;
    }

    const newEnv = config.extend;
    const configWithoutExtend = _.omit(config, 'extend');

    return { ...this.load(newEnv), ...configWithoutExtend };
  }
} */

// @ts-check

import fs from 'fs';
import _ from 'lodash';

// BEGIN (write your solution here)
class DatabaseConfigLoader {
  constructor (folderPath) {
    this.folderPath = folderPath;
  }

  load(env) {
    const file = fs.readFileSync(`${this.folderPath}/database.${env}.json`, 'utf-8');
    const result = JSON.parse(file);
    if (!result.hasOwnProperty('extend')) {
      return result;
    }

    const updEnv = result.extend;
    const newDatabase = _.omit(result, 'extend');
    return { ...this.load(updEnv), ...newDatabase };
  }
}

export default DatabaseConfigLoader;
// END



