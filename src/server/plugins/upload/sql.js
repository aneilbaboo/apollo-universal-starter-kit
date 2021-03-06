/*eslint-disable no-unused-vars*/
import knex from '../../../server/sql/connection';

export default class Upload {
  files() {
    return knex('upload').select('*');
  }

  file(id) {
    return knex('upload')
      .select('*')
      .where({ id })
      .first();
  }

  saveFiles(files) {
    return knex('upload').insert(files);
  }

  deleteFile(id) {
    return knex('upload')
      .where({ id })
      .del();
  }
}
