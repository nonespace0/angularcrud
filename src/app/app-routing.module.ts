import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateemployeeComponent } from './employee/createemployee/createemployee.component';
import { ListemployeeComponent } from './employee/listemployee/listemployee.component';
import { UpdateemployeeComponent } from './employee/updateemployee/updateemployee.component';
const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'add', component: CreateemployeeComponent },
  { path: 'employees', component: ListemployeeComponent },
  {path: 'update-employee/:id', component: UpdateemployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
