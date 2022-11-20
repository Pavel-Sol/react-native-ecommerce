import RestAPI from "./restApi";
import { AxiosResponse } from "axios";

export abstract class UserAPI {
  public static authMe = (authHeaders: any): Promise<AxiosResponse> =>
    RestAPI.get("auth/profile", undefined, authHeaders);

  public static login = ({ email, password }): Promise<AxiosResponse> =>
    RestAPI.post("auth/login", { email, password });
}
