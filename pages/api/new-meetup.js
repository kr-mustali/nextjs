import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://new_user:admin@cluster0.gusc1.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.insertOne(data);

    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
