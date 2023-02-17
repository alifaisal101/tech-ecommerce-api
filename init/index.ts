import { MongoClient } from 'mongodb';
import { passwordPrompt, userPrompt } from './prompt';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('No MongoDB Url was provided');
}

const initalizer = async () => {
  try {
    const client = new MongoClient(MONGODB_URI);
    client.connect();
    console.log('Connected successfully to db server...');

    const usersCollection = client.db().collection('users');
    const adminUserExists =
      (await usersCollection.findOne({ privileges: { $in: ['admin'] } })) ||
      false;

    if (adminUserExists) {
      console.warn(
        'Admin User Already exists. Project was already initialized.',
        'exting...',
      );
      return process.exit(0);
    }

    const user = await userPrompt();
    const password = await passwordPrompt();

    await usersCollection.insertOne({
      ...user,
      isCompany: false,
      password,
      confirmed: true,
      privileges: ['admin'],
    });

    console.log('Admin User was created successfully.', 'exting...');
    return process.exit(0);
  } catch (err) {
    throw err;
  }
};

initalizer();
