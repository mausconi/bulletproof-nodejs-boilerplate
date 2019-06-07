import { Model } from 'objection';
import * as _ from 'lodash';

class AbstractModel extends Model {

  updatedAt: Date;

  $beforeUpdate() {
    this.updatedAt = new Date();
  }

  $formatDatabaseJson(json: object) {
    return _.mapKeys(json, (v: string, k: any) => _.snakeCase(k));
  }

  $parseDatabaseJson(json: object) {
    return _.mapKeys(json, (v: string, k: any) => _.camelCase(k));
  }
}

export default AbstractModel;
