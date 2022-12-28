import * as Realm from "realm-web";
import { environments } from "../environments/environments";

// console.log("API_KEY::", process.env.REACT_APP_API_KEY);
// console.log("API_KEY::", process.env.REACT_APP_APP_ID);

const app = new Realm.App(process.env.REACT_APP_APP_ID);

export async function getValidAccessToken() {
  if (!app.currentUser) {
    const credentials = Realm.Credentials.apiKey(process.env.REACT_APP_API_KEY);
    await app.logIn(credentials);
  } else {
    await app.currentUser.refreshCustomData();
  }
  return app.currentUser.accessToken;
}
