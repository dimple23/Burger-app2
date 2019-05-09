//import our connection
const connection = require('./connection');

// create a function that reads from the burgers table
// SELECT * FROM burgers
const findAll = () => {
  // create a new Promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers', function(err, dbburgerData) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbburgerData);
    });
  });
};

// find a burger by id
// SELECT * FROM burgers WHERE id = ?
const findById = burgerId => {
  // create a new Promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers WHERE id = ?', [burgerId], function(err, dbburgerData) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbburgerData);
    });
  });
};

// CREATE/INSERT
// INSERT INTO burgers SET ? ({name: "burgerName"})
const create = burgerDataObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burgers SET ?', [burgerDataObj], function(err, dbburgerData) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbburgerData);
    });
  });
};

// UPDATE burgers (set value of "sleepy" to true or false)
// UPDATE burgers SET sleepy = ? WHERE id = ? ([true, 2])
const update = (devortedValue, burgerId) => {
  return new Promise((resolve, reject) => {

    // set sleepyValue to boolean true/false
    devortedValue = (devortedValue === "true") 
      ? true : false;

    connection.query("UPDATE burgers SET devorted = ? WHERE id = ?", [devortedValue, burgerId], function(err, dbburgerData) {

      if (err) {
        return reject(err);
      }
      else if (dbburgerData.changedRows === 0) {
        return reject({message: "You probably have the wrong ID"});
      }
      else {
        return resolve(dbburgerData);
      }
    })
  })
}

// DELETE a burger
// DELETE FROM burgers WHERE id = ?
const remove = (Id) => {
  return new Promise((resolve, reject) => {

    connection.query("DELETE FROM burgers WHERE id = ?", [Id], function (err, dbburgerData) {

      if (err) {
        return reject(err);
      }
      else if (dbburgerData.affectedRows === 0) {
        return reject({ message: "You probably have the wrong ID" });
      }
      else {
        return resolve(dbburgerData);
      }
    })
  })
}

// export all of our new functions as methods of an object
module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};
