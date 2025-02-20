const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// MongoDB connection URL and database/collection names
const uri = process.env.MONGO_URI || "mongodb://localhost:27017";
const dbName = "constitutionApp";
const collectionName = "users";

async function insertUser(email, password) {
    const client = new MongoClient(uri);

    try {
        // Connect to MongoDB
        await client.connect();

        // Access the database and collection
        const db = client.db(dbName);
        const usersCollection = db.collection(collectionName);

        // Insert the user document
        const result = await usersCollection.insertOne({ email, password });

        console.log(`User inserted successfully with ID: ${result.insertedId}`);
    } catch (error) {
        console.error("Error inserting user:", error);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Replace these with your user's credentials
const email = "user@example.com";
const password = "password123";

// Call the function
insertUser(email, password);
