import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/book';
import { WebApiService } from 'src/app/service/web-api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
body: Book[]=[]

constructor (private bookapi:WebApiService) {}
collection:any []=[]

ngOnInit(): void {
  this.bookapi.getAll().subscribe((data:Book[])=>{
    this.body = data
    console.log(this.body)
  })
}

deletebook(item: number) {
  this.collection.splice(item-1,1)
  this.bookapi.deletebook(item).subscribe((result)=>{
    console.log("result", result)
    location.reload(); 
  })
}

}
