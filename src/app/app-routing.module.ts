import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { CanAcessGuard } from './guadrs/can-acess.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  // {path:'header',component:HeaderComponent},
  // {path:'home',component:HomeComponent},
  // {path:'search',component:SearchComponent},
  //  {path:'table',component:TableComponent},
  {path:'product-list',component:ProductListComponent},
   {path:'add-products',component:ProductsComponent},
   {path:'edit-products/:id',component:ProductsComponent,canDeactivate:[CanAcessGuard]},
  
  {path:'',redirectTo:'product-list',pathMatch:'full'}
]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
