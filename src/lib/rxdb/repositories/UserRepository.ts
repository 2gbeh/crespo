import { RxJsonSchema } from "rxdb/plugins/core";
import User, {
  IUser,
  IUsers,
  UserDocType,
  UserDocument,
  UserCollection,
} from "../models/User";

const userDocMethods: IUser = {
  greet: function (this: UserDocument, args: string) {
    return args.replace("%s", this.name);
  },
};

const userCollectionMethods: IUsers = {
  numrows: async function (this: UserCollection) {
    const allDocs = await this.find().exec();
    return allDocs.length;
  },
};

const schema: RxJsonSchema<UserDocType> = User;
export default {
  // create the typed RxJsonSchema from the literal typed object.
  schema,
  methods: userDocMethods,
  statics: userCollectionMethods,
};
