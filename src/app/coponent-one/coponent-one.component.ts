import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-coponent-one',
  templateUrl: './coponent-one.component.html',
  styleUrls: ['./coponent-one.component.css']
})
export class CoponentOneComponent {
uname!:string;
constructor(private httpsvc:HttpService){

}
updateData(){
  this.httpsvc.setdata(this.uname)
}
}
