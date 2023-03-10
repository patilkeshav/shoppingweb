import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseUrl:string="http://localhost:3000/";  
httpHeaders:HttpHeaders=new HttpHeaders().set("content-Type","application/json")
sharedData!:string;
  constructor(private http:HttpClient) { }
  postDataToServer(endpoint:string ,body:any){
    const Url=this.baseUrl+endpoint;
  return this.http.post(Url,body,{headers:this.httpHeaders})
  }
  putDataToServer(endpoint:string,body:any){
    const Url=this.baseUrl+endpoint;
    return this.http.put(Url,body,{headers:this.httpHeaders})
  }
  getDataFromServer(endpoint:string){
    const Url=this.baseUrl+endpoint;
    return this.http.get(Url,{headers:this.httpHeaders})
  }
  deleteDataFromServer(endpoint:string){
    const url =this.baseUrl+endpoint;
    return this.http.delete(url,{headers:this.httpHeaders});
  }
 setdata(data:string){
this.sharedData=data;
 }
 getdata(){
  return this.sharedData;
 }
}

