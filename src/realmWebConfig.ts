import * as Realm from "realm-web";
const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    BSON: { ObjectId },
  } = Realm;

const REALM_APP_ID = "mentalbuster-jtwug";
const app: Realm.App = new Realm.App({ id: REALM_APP_ID });

export async function loginApiKey() {
    // Create an API Key credential
    const credentials = Realm.Credentials.apiKey(
      "a8c0kmTVyKUvhktYLUV4QzkzfCrFAUqCIeBcoVIYeioQzTsyRm4W4yHRKLGouTtd"
    );
    try {
      // Authenticate the user
      const user = await app.logIn(credentials);
      // `App.currentUser` updates to match the logged in user
    //   console.assert(user.id === app.currentUser.id);
      return user;
    } catch (err) {
      console.error("Failed to log in", err);
    }
  }

export default app;