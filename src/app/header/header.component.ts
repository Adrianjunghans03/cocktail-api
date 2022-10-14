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

  constructor() { }

  
  
  async fetchdata()
  {
    
    const api_url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list'
    
    const response = await fetch(api_url) 
    const data = response.json();
    return data;

}

        async value()
    {
     const types = await this.fetchdata(); 
     this.typ = types["drinks"];
      return this.typ;
    }



  Types()
  {

    do{
    this.difftyp = this.typ[this.x];
    this.typeofSud = this.difftyp['strAlcoholic'];
    this.x++;
    this.arr[this.x-1] = this.typeofSud;
    }
    while(this.x < this.typ.length);

  }

  itemfunc(sample:string)
  {
    if(sample == "Alcoholic")
      {
        console.log("You've clicked " + sample);
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
    this.fetchdata();
    this.value();
    



}
}


