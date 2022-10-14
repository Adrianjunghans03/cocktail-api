import { Component, OnInit } from '@angular/core';
import { async, timeout } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  typ = [];
  x = 0;
  typeofSud:string = "";
  difftyp = {"strAlcoholic": this.typeofSud}
  arr:any = [];
  sample:string = "";
  api_url:string ="";

  constructor() { }

  
//fetches data to choose kind of cocktail 
  async fetchdata(api_url:string)
  {
    
    api_url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list'
    
    const response = await fetch(api_url) 
    const data = response.json();
    return data;
    

}
//gets different types of cocktails
        async value()
    {
     const types = await this.fetchdata(this.api_url); 
     this.typ = types["drinks"];
      return this.typ;
    }



  Types()
  {
    //Get all different Types of cocktails
    do{

    this.difftyp = this.typ[this.x];
    this.typeofSud = this.difftyp['strAlcoholic'];
    this.x++;
    this.arr[this.x-1] = this.typeofSud;
    }
    while(this.x < this.typ.length);

  }

  async itemfunc(sample:string)
  {
    if(sample == "Alcoholic")
      {let erg = 0;
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
        const data = response.json();
        data.then(data => 
          { erg = data;
            
        });
        
        
      }

      if(sample == "Non alcoholic")
      {
        console.log("You've clicked " + sample);
      }

      if(sample == "Optional alcohol")
      {
        console.log("You've clicked " + sample);
      }
    

  }

  Alcoholic()
  {
    console.log("es funkt");
  }

  ngOnInit(){
    console.clear();
    this.fetchdata(this.api_url);
    this.value();
    



}
}


