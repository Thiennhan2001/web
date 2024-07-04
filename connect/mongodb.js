const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://Nhan:dy66DNmedoUHz36S@cluster0.4z0npgm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const database = client.db('Management');
        const collection = database.collection('Customer');

        // Lấy tất cả dữ liệu từ collection
        const documents = await collection.find({}).toArray();
        console.log(documents);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
