import axios, { AxiosError, AxiosResponse, AxiosInstance, AxiosRequestHeaders } from "axios";

class RestAPI {
  url: string;

  constructor() {
    this.url = "https://api.escuelajs.co/api/v1/";
  }

  handleSuccess = (response: AxiosResponse): AxiosResponse => response;

  handleError = (error: AxiosError): Promise<object> | void => {
    console.log("restApi error!!!!!!!! ", error);

    switch (error?.response?.status) {
      case 401:
        return Promise.reject(new Error("ошибка авторизации"));
      case 502:
        return Promise.reject(new Error("Сервер не доступен"));
      default:
        break;
    }
    return Promise.reject(new Error("Что-то пошло не так"));
  };

  private create = (headers?: any): AxiosInstance => {
    const service = axios.create({
      headers: {
        ...headers,
      },
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    return service;
  };

  public get = <T>(
    path: string = "",
    params?: T,
    headers?: AxiosRequestHeaders
  ): Promise<AxiosResponse> => {
    const service = this.create(headers);
    return service.request({
      method: "GET",
      url: `${this.url}${path}`,
      params,
    });
  };

  public post = <T>(
    path: string,
    data: T,
    headers?: AxiosRequestHeaders
  ): Promise<AxiosResponse> => {
    const service = this.create(headers);
    return service.request({
      method: "POST",
      url: `${this.url}${path}`,
      data,
    });
  };

  public put = <T>(
    path: string,
    data?: T,
    params?: T,
    headers?: AxiosRequestHeaders
  ): Promise<AxiosResponse> => {
    const service = this.create(headers);
    return service.request({
      method: "PUT",
      url: `${this.url}${path}`,
      data: {
        ...data,
      },
      params,
    });
  };

  public delete = <T>(
    path: string,
    data: T,
    params: object = {},
    headers?: AxiosRequestHeaders
  ): Promise<AxiosResponse> => {
    const service = this.create(headers);
    return service.request({
      method: "DELETE",
      url: `${this.url}${path}`,
      data: {
        ...data,
      },
      params,
    });
  };
}

export default new RestAPI();
