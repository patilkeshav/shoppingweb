import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {
   baseUrl:string="https://rickandmortyapi.com/api/character/"
   httpHeaders:HttpHeaders=new HttpHeaders().set("content-Type","application/json");
   private data:any;
  constructor(private http:HttpClient) { }
  ngOnInit(): void {

  }
  getDataFromServer(endpoint:any){
let Url= endpoint+this.baseUrl
return this.http.get(Url,{'headers':this.httpHeaders})
  }
  setdata(data:any){
    this.data=data;
  }
 
  getFilteredData(searchTearm:string){
  
return this.data.filter((item:any)=>item.name.toLowerCase().includes(searchTearm.toLowerCase()))
  }
}


  