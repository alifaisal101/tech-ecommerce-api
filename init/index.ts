import { connect } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('No MongoDB Url was provided');
}

const initalizer = async () => {
  try {
    const mongooseConnection = await connect(MONGODB_URI);
    console.log(new mongooseConnection.Query());
  } catch (err) {
    throw err;
  }
  console.log('test', 'asdsa');
};

initalizer();
