import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateemployeeComponent } from './employee/createemployee/createemployee.component';
import { EmployeeService } from './service/employee.service';
import { ListemployeeComponent } from './employee/listemployee/listemployee.component';
import { UpdateemployeeComponent } from './employee/updateemployee/updateemployee.component';
import { CategoryaddComponent } from './categoryadd/categoryadd.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateemployeeComponent,
    ListemployeeComponent,
    UpdateemployeeComponent,
    CategoryaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
