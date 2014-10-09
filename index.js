var gql = require('gql');

module.exports = function(){
  var query = gql.query();
  query.needs(2);
  query.exact('rs2032651', 'D');
  query.has('rs2032651', 'A');
  query.has('rs9341296', 'C');
  query.has('rs9341296', 'T');
  query.has('rs13304168', 'C');
  query.has('rs13304168', 'T');
  query.has('rs1118473', 'A');
  query.has('rs1118473', 'G');
  query.has('rs150173', 'A');
  query.has('rs150173', 'C');
  query.has('rs16980426', 'G');
  query.has('rs16980426', 'T');
  query.or(query.exact('rs1558843', 'C'), query.exact('rs1558843', 'A'));
  query.or(query.exact('rs17222419', 'C'), query.exact('rs17222419', 'T'));
  return query;
};