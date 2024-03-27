import {
  createRxDatabase,
  RxDatabase,
  RxCollection,
  RxJsonSchema,
  RxDocument,
} from "rxdb/plugins/core";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";

import { type UserCollection, userCollection } from "./modules/user.module";

// TODO: create database and collections
const DB_NAME = "agatha-db";
const DB_PASSWORD = "$trongp@ssw0rd";

type TDatabaseCollections = {
  users: UserCollection;
};

const db: RxDatabase<TDatabaseCollections> =
  await createRxDatabase<TDatabaseCollections>({
    storage: getRxStorageDexie(),
    name: DB_NAME,
    password: DB_PASSWORD,
  });

await db.addCollections({
  users: userCollection,
});

export default db;