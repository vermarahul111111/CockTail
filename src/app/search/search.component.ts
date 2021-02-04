import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CocktailService } from '../service/cocktail.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  toSearch ='';
  selectedValue ='';
  constructor(private cocktailservice: CocktailService) { }
  selected = new FormControl();
  dataSource =[];
  displayedColumns =['name', 'image'];
  btnClicked: boolean;

  ngOnInit(): void {
    this.btnClicked = false;
  }
 

  searchClicked(){
    this.btnClicked =true;
    this.searchCockTail(this.selectedValue);
  }

  searchCockTail(selectedValue){
    this.cocktailservice.fetchByAlcoholic(selectedValue).subscribe(data =>{
      console.log("data is:", data.drinks);
      this.dataSource =data.drinks;
    })
  }

}
