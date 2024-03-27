export const noDocumentToUpdate = `FirebaseError: No document to update: projects/zentry-db/databases/(default)/documents/members/gc9RVFkwwVdwkpZvzBZK`;

export const getMember = {
  name: "Beijing",
  state: null,
  country: "China",
  capital: true,
  population: 21500000,
  regions: ["jingjinji", "hebei"],
  //
  id: "63c0681bdfbbddcd3d0ecd3a",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/346.jpg",
  title: 2,
  surname: "Lynch",
  other_names: "Dedrick Jules",
  sex: 2,
  dob: "1979-01-18",
  marital_status: 5,
  anniversary: "1971-04-27",
  email: "candelario_kozey66@hotmail.com",
  phone: "07018271279",
  mobile: "+2348063629701",
  address: "618 Clifton Road TX 06037 MCO",
  occupation: "Senior Functionality Liaison",
  category: 2,
  house: 9,
  department: 3,
  joined: "2003-10-06T16:16:29.154Z",
  created_at: { seconds: 1708889769, nanoseconds: 851000000 },
  updated_at: { seconds: 1708889769, nanoseconds: 851000000 },
  deleted_at: null,
};

export const getUser = {
  password: "4444",
  created_at: { seconds: 1708896213, nanoseconds: 715000000 },
  username: "webmaster",
  deleted_at: null,
  updated_at: null,
};

export const getAllUsers = [
  {
    username: "webmaster",
    created_at: { seconds: 1708896213, nanoseconds: 715000000 },
    updated_at: null,
    password: "4444",
    deleted_at: null,
    uuid: "KmOpm2G1vn3kFYCivwU2",
  },
  {
    deleted_at: null,
    updated_at: null,
    username: "webmaster",
    created_at: { seconds: 1708896298, nanoseconds: 450000000 },
    password: "4444",
    uuid: "Kk1Ufoz8qS4yX4lmgeue",
  },
  {
    updated_at: null,
    created_at: { seconds: 1708896328, nanoseconds: 766000000 },
    deleted_at: null,
    password: "4444",
    username: "webmaster",
    uuid: "V1ZFCXgwMCPjTXWPYh7o",
  },
  {
    password: "4444",
    deleted_at: null,
    username: "webmaster",
    updated_at: null,
    created_at: { seconds: 1708896515, nanoseconds: 806000000 },
    uuid: "6ad7jF4kOBtWju4E0pRK",
  },
];

export const getRecentUsers = [
  {
    created_at: { seconds: 1708896515, nanoseconds: 806000000 },
    updated_at: null,
    username: "webmaster",
    deleted_at: null,
    password: "4444",
    uuid: "6ad7jF4kOBtWju4E0pRK",
  },
  {
    updated_at: null,
    username: "webmaster",
    created_at: { seconds: 1708896328, nanoseconds: 766000000 },
    deleted_at: null,
    password: "4444",
    uuid: "V1ZFCXgwMCPjTXWPYh7o",
  },
];

export const getPaginatedUsers = {
  data: [
    {
      updated_at: null,
      password: "4444",
      deleted_at: null,
      created_at: { seconds: 1708896213, nanoseconds: 715000000 },
      username: "webmaster",
      uuid: "KmOpm2G1vn3kFYCivwU2",
    },
    {
      created_at: { seconds: 1708896298, nanoseconds: 450000000 },
      deleted_at: null,
      password: "4444",
      username: "webmaster",
      updated_at: null,
      uuid: "Kk1Ufoz8qS4yX4lmgeue",
    },
  ],
  meta: {
    offset: {
      _firestore: {
        app: {
          _isDeleted: false,
          _options: {
            appId: "1:119305697746:web:77d0c95931dcede744300b",
            apiKey: "AIzaSyCrSPfXwMBNF99CZrGnFRXbRRNljAp8GyA",
            authDomain: "zentry-db.firebaseapp.com",
            projectId: "zentry-db",
            storageBucket: "zentry-db.appspot.com",
            messagingSenderId: "119305697746",
            measurementId: "G-PB98KJNKEC",
          },
          _config: { name: "[DEFAULT]", automaticDataCollectionEnabled: false },
          _name: "[DEFAULT]",
          _automaticDataCollectionEnabled: false,
          _container: { name: "[DEFAULT]", providers: {} },
        },
        databaseId: { projectId: "zentry-db", database: "(default)" },
        settings: {
          host: "firestore.googleapis.com",
          ssl: true,
          ignoreUndefinedProperties: false,
          cacheSizeBytes: 41943040,
          experimentalForceLongPolling: false,
          experimentalAutoDetectLongPolling: true,
          experimentalLongPollingOptions: {},
          useFetchStreams: true,
        },
      },
      _userDataWriter: {
        firestore: {
          app: {
            _isDeleted: false,
            _options: {
              appId: "1:119305697746:web:77d0c95931dcede744300b",
              apiKey: "AIzaSyCrSPfXwMBNF99CZrGnFRXbRRNljAp8GyA",
              authDomain: "zentry-db.firebaseapp.com",
              projectId: "zentry-db",
              storageBucket: "zentry-db.appspot.com",
              messagingSenderId: "119305697746",
              measurementId: "G-PB98KJNKEC",
            },
            _config: {
              name: "[DEFAULT]",
              automaticDataCollectionEnabled: false,
            },
            _name: "[DEFAULT]",
            _automaticDataCollectionEnabled: false,
            _container: { name: "[DEFAULT]", providers: {} },
          },
          databaseId: { projectId: "zentry-db", database: "(default)" },
          settings: {
            host: "firestore.googleapis.com",
            ssl: true,
            ignoreUndefinedProperties: false,
            cacheSizeBytes: 41943040,
            experimentalForceLongPolling: false,
            experimentalAutoDetectLongPolling: true,
            experimentalLongPollingOptions: {},
            useFetchStreams: true,
          },
        },
      },
      _key: {
        path: {
          segments: [
            "projects",
            "zentry-db",
            "databases",
            "(default)",
            "documents",
            "users",
            "Kk1Ufoz8qS4yX4lmgeue",
          ],
          offset: 5,
          len: 2,
        },
      },
      _document: {
        key: {
          path: {
            segments: [
              "projects",
              "zentry-db",
              "databases",
              "(default)",
              "documents",
              "users",
              "Kk1Ufoz8qS4yX4lmgeue",
            ],
            offset: 5,
            len: 2,
          },
        },
        documentType: 1,
        version: { timestamp: { seconds: 1708896298, nanoseconds: 567716000 } },
        readTime: {
          timestamp: { seconds: 1708908507, nanoseconds: 504171000 },
        },
        createTime: {
          timestamp: { seconds: 1708896298, nanoseconds: 567716000 },
        },
        data: {
          value: {
            mapValue: {
              fields: {
                created_at: { timestampValue: "2024-02-25T21:24:58.450Z" },
                deleted_at: { nullValue: null },
                password: { stringValue: "4444" },
                username: { stringValue: "webmaster" },
                updated_at: { nullValue: null },
              },
            },
          },
        },
        documentState: 0,
      },
      _converter: null,
      _firestoreImpl: {
        app: {
          _isDeleted: false,
          _options: {
            appId: "1:119305697746:web:77d0c95931dcede744300b",
            apiKey: "AIzaSyCrSPfXwMBNF99CZrGnFRXbRRNljAp8GyA",
            authDomain: "zentry-db.firebaseapp.com",
            projectId: "zentry-db",
            storageBucket: "zentry-db.appspot.com",
            messagingSenderId: "119305697746",
            measurementId: "G-PB98KJNKEC",
          },
          _config: { name: "[DEFAULT]", automaticDataCollectionEnabled: false },
          _name: "[DEFAULT]",
          _automaticDataCollectionEnabled: false,
          _container: { name: "[DEFAULT]", providers: {} },
        },
        databaseId: { projectId: "zentry-db", database: "(default)" },
        settings: {
          host: "firestore.googleapis.com",
          ssl: true,
          ignoreUndefinedProperties: false,
          cacheSizeBytes: 41943040,
          experimentalForceLongPolling: false,
          experimentalAutoDetectLongPolling: true,
          experimentalLongPollingOptions: {},
          useFetchStreams: true,
        },
      },
      metadata: { hasPendingWrites: false, fromCache: false },
    },
  },
};
