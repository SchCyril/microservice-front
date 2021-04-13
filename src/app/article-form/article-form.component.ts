import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent {

  article!: Article;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private articleService: ArticleService) {
    this.article = new Article();
  }

  onSubmit() {
    this.articleService.save(this.article).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/articles']);
  }

}
