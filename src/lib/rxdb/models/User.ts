import {
  toTypedRxJsonSchema,
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxDocument,
  RxCollection,
} from "rxdb/plugins/core";


// define collection schema
const User = {
  title: "user schema",
  description: "describes a user",
  version: 0,
  keyCompression: true,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "number",
      maxLength: 11, // <- the primary key must have set maxLength
      final: true,
    },
    name: {
      type: "string",
      minLength: 2,
    },
    // hi@x.io
    email: {
      type: "string",
      minLength: 7,
      final: true,
    },
    password: {
      type: "string",
      minLength: 8,
    },
    createdAt: {
      type: "string",
      minLength: 24,
      maxLength: 24,
      final: true,
    },
  },
  required: ["name", "email", "password"],
  indexes: ["email"],
  encrypted: ["password"],
} as const; // <- It is important to set 'as const' to preserve the literal type

export default User;

// Document methods
export interface IUser {
  greet: (args: string) => string;
}

// Collection methods (static ORM-methods)
export interface IUsers {
  numrows: () => Promise<number>;
}

// TODO: aggregate the document type from the schema
const userTypedRxJsonSchema = toTypedRxJsonSchema(User);
export type UserDocType = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof userTypedRxJsonSchema
>;

export type UserDocument = RxDocument<UserDocType, IUser>;

export type UserCollection = RxCollection<UserDocType, IUser, IUsers>;