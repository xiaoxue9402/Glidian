/*********************************************************************************
 * This file is used to populate the database with initial data, found in ./fixtures
 *********************************************************************************/

const _ = require('lodash');
const fixtures = require('./fixtures');

module.exports = async function (models) {
  await models.Group.bulkCreate(fixtures.Groups);
  await models.User.bulkCreate(fixtures.Users);
  const userGroups = _.flattenDeep(
    fixtures.Users.map(user => user.Groups.map(group => ({UserId: user.id, GroupId: group.id })))
  );
  await models.UserGroup.bulkCreate(userGroups);
};
