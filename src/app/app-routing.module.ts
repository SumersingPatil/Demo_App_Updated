import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ManageproductComponent } from './admin/manageproduct/manageproduct.component';



const routes: Routes = [
  {path:'admin/adminlogin', component:AdminloginComponent},
  {path:'admin', component:AdminloginComponent},
  {path:'admin/dashboard', component:DashboardComponent},
  {path:'', component:UserhomeComponent},
  {path:'admin/manageproduct', component:ManageproductComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
