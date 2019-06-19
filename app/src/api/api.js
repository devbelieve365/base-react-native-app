import RequestHelper from "../helpers/request.helper";
import { appConfig } from "../config/app.config";
import qs from "qs";

export default class Api {
  static login({ username, password }) {
    return RequestHelper.post(appConfig.apiUrl + "login", {
      username,
      password
    });
  }

  static register(data) {
    return RequestHelper.post(appConfig.apiUrl + "register", data);
  }
}
