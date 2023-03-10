import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
productForm!:FormGroup;
id:string|null;
editProduct:boolean=false;
constructor(private Fb:FormBuilder ,private httpsrv:HttpService,private route:ActivatedRoute){
  this.id=this.route.snapshot.paramMap.get('id');
  
}
ngOnInit(): void {
  this.createForm();
  if(this.id !=null){
    this.editProduct=true;
    this.getProductsDetails();
}}
getProductsDetails(){
  console.log(this.productForm.value);
  const endpoint = "products/"+this.id
    this.httpsrv.getDataFromServer(endpoint).subscribe((el:any)=>{
      if(el){
        console.log(el);
        this.productForm.patchValue(el);
      }
  },
  error=>{

  })
};
createForm(){
  this.productForm=this.Fb.group({

    "ProductName":[''],
    "Price":[''],
    "Discriptions":[''],
    "category":[''],
  
  })
};
save(){
  console.log(this.productForm.value);
  const requestBody=this.productForm.value;
  this.httpsrv.postDataToServer("products",requestBody).subscribe((data:any)=>{
    console.log("sucess")
    this.productForm.reset();
  },
  error=>{})
};
submit(){
  if(this.editProduct){
    this.update()
  }
    else{this.save();
    }
  }
update(){
    const requestBody = this.productForm.value ;
    const endPoint = "products/"+this.id;
    this.httpsrv.putDataToServer(endPoint,requestBody).subscribe((data:any)=>{
        console.log("success");
       this.productForm.reset();
    },
    error=>{

    })
}
canExit(){
  if(this.productForm.dirty){
    const select =confirm("confirm Exit");
    if(select)return true
  }
  return false
}

}



  