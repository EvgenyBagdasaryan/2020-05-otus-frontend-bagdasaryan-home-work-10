import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from './books/books.component';
import {CommentsComponent} from './comments/comments.component';


const routes: Routes = [
  { path: '', component: BooksComponent},
  { path: 'books', component: BooksComponent},
  { path: 'comments/:bookId', component: CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
