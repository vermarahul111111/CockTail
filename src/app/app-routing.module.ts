import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ViewcocktailsComponent } from './viewcocktails/viewcocktails.component';

const routes: Routes = [
  { path: 'viewAll', component: ViewcocktailsComponent},
  { path: 'search', component: SearchComponent},
  { path:'', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
