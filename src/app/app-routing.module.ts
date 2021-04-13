import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleListComponent } from './article-list/article-list.component';

const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'add-article', component: ArticleFormComponent },
  { path: 'articles/:id', component: ArticleListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
