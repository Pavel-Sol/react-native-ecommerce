import RestAPI from "./restApi";
import { AxiosResponse } from "axios";

export abstract class ProductAPI {
  public static fetchProducts = (params: string): Promise<AxiosResponse> =>
    RestAPI.get(`products${params}`);
}
