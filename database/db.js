
module.exports = function () {
    var mongoClient = require('mongoose');
    var connectString = "mongodb://admin:password@host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]";
    //provide a sensible default for local development
    var mongodb_connection_string = 'mongodb://127.0.0.1:27017/' + "nodejs";
    //take advantage of openshift env vars when available:
    if (process.env.OPENSHIFT_MONGODB_DB_URL) {
        mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + "nodejs";
    }
    var db = mongoClient.connection;


    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("HI!");
    });
    mongoClient.connect(mongodb_connection_string);
};
