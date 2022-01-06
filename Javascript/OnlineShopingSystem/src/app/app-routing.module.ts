import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewCUstomersComponent } from './view-customers/view-customers.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';


const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products', component:ViewProductsComponent},
  {path:'customers', component:ViewCUstomersComponent},
  {path:'addProducts', component:AddProductsComponent},
  {path:'registerCustomer', component:RegisterCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
