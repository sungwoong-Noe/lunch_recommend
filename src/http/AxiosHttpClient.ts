import axios, {AxiosError, type AxiosInstance, AxiosRequestConfig} from "axios";
import HttpError from "@/http/HttpError";


export type HttpRequestConfig = {
    path: string;
    method: "GET" | "POST" | "PATCH" | "DELETE";
    params?: any;
    body?: any;
}

export default class AxiosHttpClient{

    private  readonly client: AxiosInstance = axios.create({
        timeout: 3000,
        timeoutErrorMessage: "힝..."
    })

    public async request(config: HttpRequestConfig) {
        return this.client
            .request({
                method: config.method,
                url: config.path,
                params: config.params,
                body: config.body
            }).catch((e: AxiosError) => {
                return Promise.reject(new HttpError(e));
            });
    }

    public async get(config: HttpRequestConfig) {
        return this.request({...config, method: "GET"})
    }

    public async post(config: HttpRequestConfig) {
        return this.request({...config, method: "POST"})
    }
}