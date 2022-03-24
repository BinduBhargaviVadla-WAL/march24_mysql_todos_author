const connector = require("../connect");
exports.createTable = (req, res) => {
  console.log(connector);
  const sql =
    "CREATE TABLE author (id int AUTO_INCREMENT PRIMARY KEY,first_name varchar(20),last_name varchar(20),dob DATE,dod DATE)";
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
};
exports.insertAuthor = (req, res) => {
  const { first_name, last_name, dob, dod } = req.body;
  const sql = `INSERT INTO author (first_name,last_name,dob,dod) VALUES("${first_name}","${last_name}","${dob}","${dod}")`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
};
exports.selectAuthor = (req, res) => {
  const sql = `SELECT * FROM author`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
};
exports.deleteAuthor = (req, res) => {
  console.log(req.params);
  const sql = `DELETE FROM author where id = "${req.params.id}"`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
};
exports.deleteAll = (req, res) => {
  const sql = `DELETE FROM author`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
};
exports.updateAuthor = (req, res) => {
  const { first_name, last_name, dob, dod } = req.body;
  const sql = `UPDATE author SET first_name="${first_name}",last_name="${last_name}",dob="${dob}",dod="${dod}" where id="${req.params.id}"`;
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
};
