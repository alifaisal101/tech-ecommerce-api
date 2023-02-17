import { connect } from 'mongoose';
import { passwordPrompt, userPrompt } from './prompt';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('No MongoDB Url was provided');
}

const initalizer = async () => {
  const user = await userPrompt();
  const hashedPw = await passwordPrompt();

  // console.log(adminUser, hashedPw);
  try {
    // const mongooseConnection = await connect(MONGODB_URI);
    // console.log(new mongooseConnection.Query());
  } catch (err) {
    throw err;
  }
};

initalizer();
