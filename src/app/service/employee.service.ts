import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Employee } from '../model/employee';

import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = "http://localhost:8080/app";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/get`);
  }
  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/save`, employee);
  }
  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/update/${id}`);
  }
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseURL}/delete/${id}`);
  }
}
