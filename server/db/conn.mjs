import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

export const connectToServer = (callback) => {
    client.connect(function (err, db) {
        // Verify we got a good "db" object
        if (db) {
            _db = db.db("employees");
            console.log("Successfully connected to MongoDB.");
        }
        return callback(err);
    });
}

export const getDb = () => {
    return _db;
}
