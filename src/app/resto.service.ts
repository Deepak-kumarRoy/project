import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable()
export class RestoService {
url = "/assets/data/db.json"
collection=[
  {
    "id": 1,
    "name": "KFC restaurant",
    "address": "noida sector 50",
    "email": "kfc@test.com"
  },
  {
    "id": 2,
    "name": "OM restaurant",
    "address": "delhi sector 20",
    "email": "om@test.com"
  },
  {
    "id": 3,
    "name": "burger king restaurant",
    "address": "gurgao sector 30",
    "email": "burger@test.com"
  },
  {
    "id": 4,
    "name": "domino restaurant",
    "address": "saltlake sector 5",
    "email": "domino@test.com"
  },
  {
    "id": 5,
    "name": "haldiram restaurant",
    "address": "dwarika sector 50",
    "email": "haldiram@test.com"
  }
]
id=6
  constructor(private http:HttpClient) { }
  getList()
  {
    return this.collection
  //  return this.http.get(this.url);
  }
  saveResto(data)
  {
    console.log(data)
    data.id=this.id
    this.id=this.id+1
    this.collection.push(data)
    // return this.http.post(this.url, data);
  }
  deleteResto(item)
  {
    this.collection.splice(item-1,1)
    // return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentResto(id)
  {
    return this.http.get(`${this.url}/${id}`)
  }
  updateResto(id,data)
  {
    this.collection[id]=data
    // return this.http.put(`${this.url}/${id}`,data)
  }
}