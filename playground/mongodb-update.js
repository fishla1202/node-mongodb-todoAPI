const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('5b66d6477dbb6e8402c05774')
    // }, {
    //         $set: { name: 'fishwow' },
    //         $inc: { age: +3 }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    // });


    client.close();
});