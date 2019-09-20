package com.niit.SkillDB.service;

import java.util.List;

import com.niit.SkillDB.model.Employee;

public interface EmployeeService {
	public boolean addservice(Employee emp);

	public boolean deleteService(int employeeid);

	public boolean updateEmployee(Employee employeeid);

	public Employee getUpdateId(int employeeid);

	public Employee getEmployeebyId(int employeeid);

	public List<Employee> getAll();

}
