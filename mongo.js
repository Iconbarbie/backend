const mongodb = require("mongodb");//here we are importing mongodb and giving it a name of mongodb
const MongoClient = mongodb.MongoClient;//mongoclient is a class that allows making connections to mongodb
const connectionURL = "mongodb+srv://barbarahappiness:goldahoiro79@cluster0.mqk4jcq.mongodb.net/"
const databaseName = "task-manager";//we are creating a database name where our data will be stored
MongoClient.connect(connectionURL, (error, client) => {//it is a method that connects to mongodb using the connctionURL which can either provide(client to mean true) ||(error)
    if (error) {//if there is an error which means not true then return unable to connect
        return console.log("unable to connect to database")
    }
    const db = client.db(databaseName);//db is a method that creates a new sharing to the datababase
    db.collection("users").insertOne({//collection method returns a refrence to amogodb collection
        name: "james",//insertone is a method that only allows one user to access the database
        age: 26,
        name:"veri",
        age:12,
    },
    db.collection("users").insertMany([//insetmany is a method that allows insertion of an array of docs
        {
        name: "Mary",
        age: 25,
    },
    {
        name: "happy",
        age: 34,
     },
    ]),
    (error, result) => {
       if (error) {
        return console.log("unable to create user");
       }
       console.log(result);
    });
});






