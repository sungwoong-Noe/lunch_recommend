import HttpRepository from "@/repository/HttpRepository";
import {inject, singleton} from "tsyringe";

interface Login {
    username: string;
    password: string;
}


@singleton()
export default class UserRepository {
    constructor(@inject(HttpRepository) private readonly httpRepository: HttpRepository) {
    }
    public login(request: Login) {
        return this.httpRepository.post({
            path: "/api/login",
            body: request,
        })
    }
}