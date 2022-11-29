import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {
  employees : Employee[];


  constructor(private employeeService:EmployeeService, private router:Router){

  }

  
  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( );
    this.router.navigate(['/employees']);
}
}
