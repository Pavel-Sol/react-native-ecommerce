import RestAPI from "./restApi";
import { AxiosResponse } from "axios";

export abstract class ProductAPI {
  public static fetchProducts = ({ params, category }): Promise<AxiosResponse> =>
    RestAPI.get(`categories/${category}/products${params}`);

  public static getProduct = (id: number): Promise<AxiosResponse> => RestAPI.get(`products/${id}`);
}
