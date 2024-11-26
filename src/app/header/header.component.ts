import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isLoggined:boolean = false
  loginUserName:string = ""

  ngOnInit(){
    if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
      this.isLoggined = true
     this.loginUserName =  JSON.parse(sessionStorage.getItem("user") || "" ) .username.split(" ")[0]
    }else{
      this.isLoggined = false
      this.loginUserName = ""
    }
  }
}
