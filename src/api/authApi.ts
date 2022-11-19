import RestAPI from "./restApi";
import { AxiosResponse } from "axios";

abstract class AuthAPI {
  public static authMe = (authHeaders: any): Promise<AxiosResponse> =>
    RestAPI.get("auth/profile", undefined, authHeaders);
}

export default AuthAPI;
