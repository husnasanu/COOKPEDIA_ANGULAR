import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  demoMail:string = "xyz@gmail.com"

  testimonyForm:FormGroup
  constructor(private fb:FormBuilder,private api:ApiService){
   this.testimonyForm = this.fb.group({
    name:[''],
    email:[''],
    message:['']
   })
  }

  submitTestimony(){
    const name = this.testimonyForm.value.name
    const email = this.testimonyForm.value.email
    const message = this.testimonyForm.value.message
    if(name && email && message){
      // alert(`Name: ${name} ,Email:${email} ,Message:${message} ✅`)
      this.api.saveTestimonyAPI({name,email,message}).subscribe((res:any)=>{
        alert("Thank yu For your Tesimony....")
        this.testimonyForm.reset()
        
      })
      
    }else{
      alert("Please Fill the form completely!!!...")
    }
  }
}
