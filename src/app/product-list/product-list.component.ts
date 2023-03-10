import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productlist:any[]=[];
  NewProductsList:any[]=[];
  deletproduct:any=[];
  //ProductlistAcs!:Observable<any>;
  constructor(private httpsrv:HttpService,private router:Router){}
  ngOnInit(): void {
    this.getProducts();
    //this.deletProduct(1)
    //this.ProductlistAcs=this.httpsrv.getDataFromServer("products")--async pipe opearator
  }
getProducts(){
this.httpsrv.getDataFromServer("products").subscribe((el:any)=>{
  if(el && el.length>0){
    this.productlist=el;
   //this.NewProductsList=this.productlist.filter((el:any)=>el.Price>25000)
  }
},

error=>{})
}
navigateTo(id:number){
 this.router.navigate(['/edit-products',id]);
}
deletProduct(id:number,index:any){
 const endpoint="products/"+id
  this.httpsrv.deleteDataFromServer(endpoint).subscribe((el:any)=>{
 //const index =this.productlist.indexOf(id);
 console.log("success")
 this.productlist.splice(index,1);
  })  }

}
