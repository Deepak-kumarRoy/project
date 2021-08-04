import { Component, OnInit, Input} from '@angular/core';
import {RestoService} from '../resto.service';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  
  constructor(private resto:RestoService) { }
  collection=[];
  ngOnInit() {
   this.collection=this.resto.getList()
  //  this.resto.getList().subscribe((result)=>{
  //    this.collection = result['collection'];
  //     console.log(this.collection);
  //   })
  }
deleteResto(item)
{
  this.resto.deleteResto(item)
  // this.collection.splice(item-1,1)
  // this.resto.deleteResto(item).subscribe((result)=>{
  //   console.log("result", result)
  // })
}
}