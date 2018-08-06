const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'fish2',
    //     age: 28,
    //     location: 'Taipei'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').find({name: 'fish2'}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('找無', err);
    // });

    // db.collection('Users').findOneAndDelete({ _id: new ObjectID('5b680f437d9b368590fc9ae6')}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b66d6477dbb6e8402c05774')
    }, {
        $set: {name: 'fishwow'},
        $inc: {age: +3}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    client.close();
});