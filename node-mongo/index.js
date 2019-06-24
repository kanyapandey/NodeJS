const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const dboper = require('./operations')
const url = 'mongodb://localhost:27017/'
const dbname = 'conFusion'

MongoClient.connect(url).then((client) => {
    // assert.equal(err,null)
    console.log('Connected correctly to server')
    const db = client.db(dbname)
    
    dboper.insertDocument(db, {name:"kenika",description:"thai"}, 'dishes').then((result) =>{
            // ops: no of operations we've carried out
            console.log('Inserted document:\n', result.ops)
            return dboper.findDocument(db, 'dishes')
        }).then((docs) => {
            console.log('Found documents:\n', docs)
            return dboper.updateDocument(db, {name: "kenika"}, {description: "thai nichi"}, 'dishes')
        }).then((result) => {
            console.log('Updated documents:\n', result.result)
            return dboper.findDocument(db, 'dishes')
        }).then((docs) => {
            console.log('Found documents:\n', docs)
            return db.dropCollection('dishes')
        }).then((result) => {
            console.log('Dropped Collection:\n', result)
            client.close()
        }).catch((err) => console.log(err));
    
}).catch((err) => console.log(err));