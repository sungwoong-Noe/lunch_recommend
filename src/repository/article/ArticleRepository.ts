import {inject, singleton} from "tsyringe";
import HttpRepository from "@/repository/HttpRepository";

export interface Article {
    idx: number | null;
    title: string;
    content: string;
}

@singleton()
export default class ArticleRepository {

    constructor(@inject(HttpRepository) private readonly httpRepository: HttpRepository) {
    }

    public create(request: Article) {

        return this.httpRepository.post({
            path: `${import.meta.env.VITE_ARTICLE_API}/article`,
            body: request,
        })
    }

    public fetch(id: number) {
        return this.httpRepository.get({
            path: `${import.meta.env.VITE_ARTICLE_API}/article/${id}`,
        })
    }

    public fetchList() {
        return this.httpRepository.get({
            path: `${import.meta.env.VITE_ARTICLE_API}/articles`
        })
    }


};