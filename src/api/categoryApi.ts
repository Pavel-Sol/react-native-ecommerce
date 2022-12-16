import RestAPI from "./restApi";
import { AxiosResponse } from "axios";

export abstract class CategoryAPI {
  public static fetchCategories = (): Promise<AxiosResponse> => RestAPI.get("categories");
}
