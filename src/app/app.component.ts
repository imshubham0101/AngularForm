import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f',{static:true}) signupForm : NgForm ;
  defaultQuestion = 'pet' ;
  answer = '' ;
  genders = ['male' , 'female'] ;

  user = {
    username : '' ,
    email : '',
    secretQuestion : '',
    answer : '',
    gender : ''
  }

  submitted : boolean = false ;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form : NgForm){
  //   console.log(form);
  // }
  
  onSubmit(){
    console.log(this.signupForm);
    this.submitted = true ;
    this.user.username = this.signupForm.value.userInfo.username;
    this.user.email = this.signupForm.value.userInfo.email ;
    this.user.secretQuestion = this.signupForm.value.secret ;
    this.user.answer = this.signupForm.value.questionAnswer ;
    this.user.gender = this.signupForm.value.gender ;


    this.signupForm.reset();
  }
  

  
}
