import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';

import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit{

  employee: Employee = new Employee();
  submitted = false;




constructor(private employeeService: EmployeeService, private router:Router ) { }

onSubmit() {
  this.employeeService.createEmployee(this.employee).subscribe();
  this.router.navigate(['/employees']);
}



  ngOnInit(): void {
    
  }

}
