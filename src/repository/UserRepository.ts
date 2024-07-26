import HttpRepository from "@/repository/HttpRepository";


interface Login {
    username: string;
    password: string;
}

export default class UserRepository extends HttpRepository {

    public login(request: Login) {
        return this.post({
            path: '/api/login',
            body: request
        })
    }
};