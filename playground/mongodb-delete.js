const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

   // db.collection('Users').findOneAndDelete({ _id: new ObjectID('5b680f437d9b368590fc9ae6')}).then((result) => {
    //     console.log(result);
    // });

    client.close();
});