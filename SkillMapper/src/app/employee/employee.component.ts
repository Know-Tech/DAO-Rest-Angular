import { Component, OnInit } from '@angular/core';
import{Employee} from '../employee_model';

import{EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  emp: Employee;

  empl:Employee[];

  //selectedEmployee: Employee;

  //constructor(private employeeserv:EmployeeService) { }

  constructor(private employeeserv:EmployeeService) { }

  ngOnInit() {
    this.getAll();
  }

getAll(): void {
  this.employeeserv.getAll().subscribe(empl => this.empl = empl);
}

add(employeeid:number,employeename:string,email:string,mobile:string,qualification:string): void {
   // employeename=employeename;
   //emp.employeeid=employeeid;
   this.emp=new Employee();
   if(employeeid!=0)
   {
  this.emp.employeeid=employeeid;
  this.emp.employeename=employeename;
  this.emp.email=email;
  
  
  this.emp.mobile=mobile;
  
  this.emp.qualification=qualification;


  
    this.employeeserv.addservice(this.emp)
      .subscribe(employee => {
        this.empl.push(this.emp);
      });
   }
  }
 
   delete(employee:Employee): void {
   /* //employeeid=employeeid;
    this.employeeserv.deleteEmployee(employeeid as number)
    .subscribe(employeeid=>{console.log('insid');
   // this.empl = this.empl.filter(h => h !== employee);
    //this.employeeserv.deleteEmployee(employee).subscribe();
  });*/
  this.empl = this.empl.filter(h => h !== employee);
    this.employeeserv.deleteEmployee(employee).subscribe();
}

/*onSelect(employee: Employee): void {
  this.selectedEmployee = employee;
}*/
}
