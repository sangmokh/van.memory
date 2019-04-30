var db = {};

// memories in the database look like this:
// {
//     userId: 'name@samsung.com',
//     whenStored: 235834734,
//     text: 'my mothers birthday is in February',
// }

// store a line of text in the db as another memory,
// returns true if successful, false if not successful
db.storeMemory = function(userId, text) {
  var console = require('console');
  if (userId !== null && text !== null) {
    console.log('db.storeMemory stored a memory for userId', userId, text)
    // TODO: implement db store
    return true;
  } else {
    console.error('db.storeMemory received null userId or text')
    return false;
  }
}

// load everything from memory in the db for this user, returns an array of
// objects that represent the memories and when they were stored
db.loadMemories = function(userId) {
  var console = require('console');
  if (userId !== null) {
    console.log('db.loadMemories recalling all memories for userId', userId)
    // TODO: replace with real database load
    // TODO: add whenStored property to the returned objects
    return [
      {
        text: 'symons birthday is march 27th',
      },
      {
        text: 'davids birthday is december 23rd',
      },
      {
        text: 'i hid the cookies in the cupboard under the sink',
      },
    ]
  } else {
    console.error('db.loadMemories received null userId')
    return [];
  }
}

// remove one memory from the database, given the original memory object made when recalling it,
// returns true if successful, false if not successful
db.eraseOneMemory = function(memory) {
  // TODO: implement
  return false;
}

// remove all memories for a user from the database,
// returns true if successful, false if not successful
db.eraseAllMemories = function(userId) {
  // TODO: implement
  return false;
}

module.exports = db;
