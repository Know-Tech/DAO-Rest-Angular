import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Employee} from './employee_model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})


export class EmployeeService {

//http://localhost:8080/SkillRest/
private strUrl ='http://localhost:8080/SkillRest/api/employee';  // URL to web api

//private strUrl='api/employee';

//get all list 
getAll(): Observable<Employee[]> {
  //return of(EMPLOYEES);
  return this.http.get<Employee[]>(this.strUrl)
  
}
/** POST: add a new employee to the server */
  addservice (employee: Employee): Observable<Employee> {//observable data services is an angular injectale server
    return this.http.post<Employee>(this.strUrl, employee, httpOptions);
    
  }
  deleteEmployee (employee: Employee | number): Observable<Employee> {
    
    const id = typeof employee === 'number' ? employee : employee.employeeid;
    const url = `${this.strUrl}/${id}`;

    return this.http.delete<Employee>(url, httpOptions)
  }
  updateEmployee (employee:Employee): Observable<any> {
    return this.http.put(this.strUrl,employee, httpOptions);
    
  }
   getid(employeeid: number): Observable<Employee> {
    const url = `${this.strUrl}/${employeeid}`;
    return this.http.get<Employee>(url);
  }
 
  constructor(private http: HttpClient) { }
}
