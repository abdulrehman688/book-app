import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebApiService } from 'src/app/service/web-api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  form !:FormGroup

  constructor(
    private bookapi:WebApiService,
    private router:Router
     ) {}

     ngOnInit(): void {
      this.form = new FormGroup({
        title: new FormControl('',[Validators.required]),
        author: new FormControl('',[Validators.required]),
        genre: new FormControl('',[Validators.required])

      })
     }

     get fetch() {
      return this.form.controls;
     }
      

     submit(){
      console.log(this.form.value)
      this.bookapi.create(this.form.value) .subscribe((res)=>{
        console.log("Book Created")
        console.log(res)
      })
      this.form.reset()
     }
}
