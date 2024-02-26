import { db } from "../../config";
import { doc, getDoc } from "firebase/firestore";

const city = {
  name: "Beijing",
  state: null,
  country: "China",
  capital: true,
  population: 21500000,
  regions: ["jingjinji", "hebei"],
};

class City {
  constructor(name, state, country) {
    this.name = name;
    this.state = state;
    this.country = country;
  }
  toString() {
    return this.name + ", " + this.state + ", " + this.country;
  }
}

// FirestoreDataConverter
const cityConverter = {
  toFirestore: (data) => {
    return {
      name: data.name,
      state: data.state,
      country: data.country,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new City(data.name, data.state, data.country);
  },
};

// https://firebase.google.com/docs/firestore/manage-data/add-data
async function setCity(tb = "cities", id = "LA") {
  try {
    await setDoc(
      doc(db, tb, id).withConverter(cityConverter),
      new City("Los Angeles", "CA", "USA"),
    );
    return id;
  } catch (error) {
    return error;
  }
}
// https://firebase.google.com/docs/firestore/query-data/get-data
async function getCity(tb = "cities", id = "LA") {
  try {
    let docSnap = await getDoc(doc(db, tb, id).withConverter(cityConverter));
    return docSnap.exists() && docSnap.data().toString();
  } catch (error) {
    return error;
  }
}
