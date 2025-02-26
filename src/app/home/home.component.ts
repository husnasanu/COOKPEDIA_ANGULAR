import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeRecipes:any = []

  constructor(private api:ApiService){}

  //life_cycle(means : function call) - this must be called in between constructor and function definition
  ngOnInit(){
    this.getAllHomeRecipes()
  }
 
  getAllHomeRecipes(){
    this.api.getAllRecipeAPI().subscribe((res:any)=>{
      this.homeRecipes = res.slice(0,6)
      console.log(this.homeRecipes);
    })
  }
}
