// no internet connection
export const networkRequestFailed = {
  code: "auth/network-request-failed",
  customData: {
    message:
      "SyntaxError: Unexpected token '<', \"<!DOCTYPE \"... is not valid JSON",
    appName: "[DEFAULT]",
  },
  name: "FirebaseError",
};

// invalid email format
export const invalidEmail = {
  code: "auth/invalid-email",
  customData: {},
  name: "FirebaseError",
};

// email or password not found
export const invalidLoginCredentials = {
  code: "auth/invalid-login-credentials",
  customData: {},
  name: "FirebaseError",
};

// login success
export const user = {
  uid: "Kya7fVibd4UETVJNLlwgPjghhWD2",
  email: "tugbeh.osaretin@gmail.com",
  emailVerified: false,
  isAnonymous: false,
  providerData: [
    {
      providerId: "password",
      uid: "tugbeh.osaretin@gmail.com",
      displayName: null,
      email: "tugbeh.osaretin@gmail.com",
      phoneNumber: null,
      photoURL: null,
    },
  ],
  stsTokenManager: {
    refreshToken:
      "AMf-vBz_8jvsbD5nizb6QmWPN6vdc14s8ZRKLavlNKuM_0rBZ5PWGJKa0Fpdbzg61TEOCSsQ33fMu3mfbMLq1jMP_X472NaEmH8qJS6oFWAfsVBWwfukHvsSzBH-R5hnvSt6wp0g3evSAmgy5C1mtwSmJBczsY4-dUevPTClPvIXIwLKbAS5zHyQz022_cGuvXMRTbzppJCzowNJSjHB-bVsAc52dgUrUg",
    accessToken:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6ImExODE4ZjQ0ODk0MjI1ZjQ2MWQyMmI1NjA4NDcyMDM3MTc2MGY1OWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY3Jlc3BvLWRiIiwiYXVkIjoiY3Jlc3BvLWRiIiwiYXV0aF90aW1lIjoxNzA4NTUxNzM5LCJ1c2VyX2lkIjoiS3lhN2ZWaWJkNFVFVFZKTkxsd2dQamdoaFdEMiIsInN1YiI6Ikt5YTdmVmliZDRVRVRWSk5MbHdnUGpnaGhXRDIiLCJpYXQiOjE3MDg1NTE3MzksImV4cCI6MTcwODU1NTMzOSwiZW1haWwiOiJ0dWdiZWgub3NhcmV0aW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInR1Z2JlaC5vc2FyZXRpbkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.U0wJ9KjnHY0ZD2Yl646MXjHdniPKc4NHJW9CsMY4xCmoSeTsCzy1Hxiu_OZwcKNErmhvVG8TSxa6MYhdrugYgL2te7xyztoa7ozrazqKz7sEHO0IYicsOh20LI4RAZJ6v3tcFzuXcorJlCNlZzpVjD2KqdaK0ekfwR_ABStJvzgjz1E3W2y8ASfXM1Y7TibcGnKlHITW5aNWlmzuxN4chI2xVI_6S07L-mIvMUiRqdtXxbCo7-wJputvpKsnSSJlgGzi9AA1aUNWZ_pPnX8XmglkwKil-5YgcpGHXDZYkQRxDee2cvLGFWeGV4ASMc4gcvT-kLjqivw1wgfOwAhCCw",
    expirationTime: 1708555330285,
  },
  createdAt: "1708452942585",
  lastLoginAt: "1708551739842",
  apiKey: "AIzaSyCrSPfXwMBNF99CZrGnFRXbRRNljAp8GyA",
  appName: "[DEFAULT]",
};

// logout success
export const logout = {
  projectId: "119305697746",
  authorizedDomains: [
    "localhost",
    "crespo-db.firebaseapp.com",
    "crespo-db.web.app",
  ],
};
