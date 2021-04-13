import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles!: Article[];
  idArticle!: number;
  article!: Article;

  constructor(private articleService: ArticleService, private router: Router ) {
  }

  ngOnInit() {
    this.articleService.findAll().subscribe(data => {
      this.articles = data;
    });
  }

  deleteArticle(id: number) {  
    this.articleService.delete(id)  
      .subscribe(  
        data => {
          console.log(data); 
          this.articleService.findAll().subscribe(data =>{  
            this.articles = data  
            })
        },
        (        error: any) => console.log(error)); 
  }

  setId(id: number) {
    this.articleService.setIdModification(id)
  }


}
