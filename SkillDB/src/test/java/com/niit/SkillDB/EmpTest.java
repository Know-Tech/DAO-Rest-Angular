package com.niit.SkillDB;


import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.junit4.SpringRunner;

import com.niit.SkillDB.Config.ConfigFileProject;
import com.niit.SkillDB.Dao.EmployeeDao;
import com.niit.SkillDB.model.Employee;
import com.niit.SkillDB.service.EmployeeService;

@RunWith(SpringRunner.class)
@SpringJUnitConfig(classes=ConfigFileProject.class) 

public class EmpTest {

	@Autowired
	private EmployeeService empServices;
	
	private Employee emp;
	
	@Before
	public void setUp() throws Exception {
		
		emp=new Employee();
	}

	@After
	public void tearDown() throws Exception {
		
	}
	
	 @Test
	public void AddEmployee()
	{
	  	
		emp.setEmployeeid(111);
	  	emp.setEmployeename("RAM");
	  	emp.setEmail("RamDas@gmail.com");	  	
	  	emp.setMobile("9874563210");	  
	  	emp.setQualification("B-Tech");
			
	  	assertEquals("Success",true,empServices.addservice(emp));
	}
	
	 
	/*@Test
	public void deleteData()
	{
		assertEquals("not found",true,empServices.deleteService(102));
	}*/
	
	/*@Test
	public void updateEmployee() 
	{
		emp=empServices.getUpdateId(105);
		emp.setEmployeename("raja");
		
		assertEquals("Successfully Updated",true, empServices.updateEmployee(emp));
	}*/
	
	/*@Test
	public void getAllEmployeeTest()
	{
		List<Employee> employeeList = new ArrayList<Employee>();
		employeeList = empServices.getAll();
		
		System.out.println("Size of employeeList = "+employeeList);
		assertEquals("Success", true, employeeList.size()!=0);
		
	}*/
}
