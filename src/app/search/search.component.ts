import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, from } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
productId:string|null;
selectedproduct:any=[]
searchText:any;
filterdedProduct:any=[]
filteredata:any=[]
constructor( private router:Router,private route:ActivatedRoute,private apisrv:ApiService){
 
  this.productId=this.route.snapshot.paramMap.get('character');
  console.log(this.productId)
}
  ngOnInit(): void {
    this.redirectTo();
  }
    
  redirectTo(){
    const endpoint="id/"+this.productId
    this.apisrv.getDataFromServer(endpoint).subscribe((responce:any)=>{
      this.selectedproduct=responce;
      
      console.log(this.selectedproduct)
    },
    error=>{})
  }
  search() {
    const productdata=this.selectedproduct.pipe(filter((data:any)=>data.name.toLowerCase==true))
    //  this.filteredata=pipe(filter((data:any)=>data.name.toLowerCase()))
    
      // Navigate to the table component to display the filtered data
      // Pass the search term as a query parameter
      // this.router.navigate(['/table'], { queryParams: { searchTerm: this.searchTerm } });
    
  }

}
