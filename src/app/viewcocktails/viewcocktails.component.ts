import { Component, OnInit, ViewChild} from '@angular/core';
import { CocktailService } from '../service/cocktail.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from  '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface cocktail{
  name: string,
  category: string,
  alcoholic: string,
  ingredients: string
}

@Component({
  selector: 'app-viewcocktails',
  templateUrl: './viewcocktails.component.html',
  styleUrls: ['./viewcocktails.component.css']
})

export class ViewcocktailsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['strDrink', 'strCategory', 'strAlcoholic', 'strIngredient1', 'strDrinkThumb'];
   dataSource = new MatTableDataSource<cocktail>();
 // dataSource = [];


  constructor(private cocktailservice: CocktailService ) { }

  ngOnInit(): void {

    this.cocktailservice.fetchAll().subscribe(data=>{
      console.log("data is", data.drinks);
      this.dataSource = data.drinks;
      console.log("value of dataSource is:", this.dataSource);

    },
    error =>{
      console.log(error);
    })

    this.dataSource.sort =this.sort;
  }

  ngAfterViewInit(): void {
     this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    // this.dataSource.filter = value.trim().toLocaleLowerCase();
    let a = value.toLowerCase();
    this.dataSource.filter = value

  }

}
