import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert:boolean=false;
  editResto= new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private router:ActivatedRoute, private resto: RestoService) { }
  collection=[];
  ngOnInit() {
    console.log(this.router.snapshot.params.id)
    var Id = this.router.snapshot.params.id
    var item
    this.resto.getList().subscribe((result)=>{
      this.collection = result['collection'];
        for (var i = 0; i<this.collection.length; i++)
        {
          if( this.collection[i].id == Id)
          {
            item = this.collection[i]
            console.log(item)
          }
        }
      this.editResto= new FormGroup({
        name: new FormControl(item['name']),
        address: new FormControl(item['address']),
        email: new FormControl(item['email'])
      })
    })
    
  }

  collections()
  {
    console.log(this.editResto.value)
    this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>{
      console.log(result)
      this.alert=true
      this.editResto.reset({})
    })
  }
  closeAlert()
  {
    this.alert=false
  }
}