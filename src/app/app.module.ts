import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleService } from './services/article.service';
import { MenuComponent } from './menu/menu.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    MenuComponent,
    ArticleFormComponent,
    UpdateArticleComponent,
    ArticleDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
