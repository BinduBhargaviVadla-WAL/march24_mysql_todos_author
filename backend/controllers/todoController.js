const connector = require("../connect");
exports.createTable = (req, res) => {
  console.log(connector);
  const sql =
    "CREATE TABLE todo (id int AUTO_INCREMENT PRIMARY KEY,item varchar(20),status varchar(15))";
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
};
exports.insertTodo = (req, res) => {
  const { item, status } = req.body;
  const sql = `INSERT INTO todo (item,status) VALUES("${item}","${status}")`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
};
exports.selectTodo = (req, res) => {
  const sql = `SELECT * FROM todo`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
};
exports.deleteTodo = (req, res) => {
  console.log(req.params);
  const sql = `DELETE FROM todo where id = "${parseInt(req.params.id)}"`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
};
exports.deleteAll = (req, res) => {
  const sql = `DELETE FROM todo`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
};
exports.updateTodo = (req, res) => {
  const { item, status } = req.body;
  const sql = `UPDATE todo SET item="${item}",status="${status}" where id="${parseInt(
    req.params.id
  )}"`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
};
