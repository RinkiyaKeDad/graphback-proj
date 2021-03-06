import { MongoClient } from 'mongodb';
//import { Password, Name } from './CONSTS';

export async function connectDB() {
  let url: string;

  const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_AUTHSOURCE,
  } = process.env;

  //if (DB_USER && DB_PASSWORD) {
  url = `mongodb+srv://${process.env.dbname}:${process.env.dbpassword}@cluster0.tfneq.mongodb.net/graphback-prod?retryWrites=true&w=majority`;
  //url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authSource=${DB_AUTHSOURCE}`;
  //} else {
  //url = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
  //}

  const mongoClient = await MongoClient.connect(url, {
    useUnifiedTopology: true,
  });

  // get db instance
  const db = mongoClient.db(process.env.DB_DATABASE);

  return db;
}
