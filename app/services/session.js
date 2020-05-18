import Service from "@ember/service";

export default class SessionService extends Service {
  get username() {
    return window.localStorage.getItem("username");
  }

  set username(val) {
    if (!val) {
      window.localStorage.removeItem("username");
    } else {
      window.localStorage.setItem("username", val);
    }
    return val;
  }

  signIn(username) {
    this.username = username;
  }

  signOut() {
    this.username = null;
  }
}
