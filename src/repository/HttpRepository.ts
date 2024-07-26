import type {HttpRequestConfig} from "@/http/AxiosHttpClient";
import AxiosHttpClient from "@/http/AxiosHttpClient";
import * as http from "node:http";

export default class HttpRepository {

    private readonly httpClient;

    constructor(httpClient: AxiosHttpClient = new AxiosHttpClient()) {
        this.httpClient = httpClient;
    }

    public async get(config: HttpRequestConfig) {
        return this.request({...config, method: "GET"})
    }

    public async post(config: HttpRequestConfig) {
        return this.request({...config, method: "POST"})
    }

};