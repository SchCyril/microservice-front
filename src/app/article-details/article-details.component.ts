import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  idArticle!: number;
  article!: Article;

  constructor(private route: ActivatedRoute,private router: Router,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.article = new Article();

    this.idArticle = this.route.snapshot.params['idArticle'];
    
    this.articleService.getArticle(this.idArticle)
      .subscribe(data => {
        console.log(data)
        this.article = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['articles']);
  }

}
