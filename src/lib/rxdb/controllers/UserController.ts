import db from "../";
import { UserDocType, UserDocument, UserCollection } from "../models/User";

export default class UserController {
  constructor() {}

  static async add(body: UserDocType) {
    // ??? add a postInsert-hook
    db.users.postInsert(
      function afterInsert(
        this: UserCollection, // own collection is bound to the scope
        doc: UserDocument, // RxDocument
        docData: UserDocType, // documents data
      ) {
        console.log("rx- insertedId: " + doc.id);
      },
      false, // not async
    );

    // insert a document
    const user: UserDocument = await db.users.insert(body);

    // access a property
    console.log('rx-', user.email);

    // use a orm method
    console.log('rx-', user.greet("Hello, %s!"));

    // use a static orm method from the collection
    console.log('rx-', await db.users.numrows());

    //  clean up
    db.destroy();
  }
}
