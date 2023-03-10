import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.css']
})
export class ComponentThreeComponent implements OnInit{
  datareceived!:string;
  constructor(private httpsvc:HttpService){}
  ngOnInit(): void {
  this.datareceived=this.httpsvc.getdata();
  }
  

  }

