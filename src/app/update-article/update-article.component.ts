import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

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

  gotoList() {
    this.router.navigate(['/articles']);
  }

}
