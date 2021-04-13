import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../model/article';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleService {

  private articleUrl: string;
  idModif!: number;

  constructor(private http: HttpClient) {
    this.articleUrl = 'http://localhost:8081/articles';
  }

  public findAll(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleUrl);
  }

  getArticle(id: number): Observable<any> {
    return this.http.get(`${this.articleUrl}/${id}`);
  }

  public save(article: Article) {
    return this.http.post<Article>(this.articleUrl, article);
  }

  public delete(id: number) {
    return this.http.delete(`${this.articleUrl}/${id}`, { responseType: 'text' });
  }

  setIdModification(id: number) {
    this.idModif = id
  }

}
