package com.naveen.service;

import com.naveen.entity.Employee;
import com.naveen.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    // Constructor injection - preferred way
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    public Employee createEmployee(Employee employee) { 
        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(Long id, Employee employeeDetails) {
        Employee employee = getEmployeeById(id);
        if (employee != null) {
            employee.setFirstName(employeeDetails.getFirstName());
            employee.setLastName(employeeDetails.getLastName());
            employee.setEmail(employeeDetails.getEmail());
            employee.setJobTitle(employeeDetails.getJobTitle());
            employee.setPhone(employeeDetails.getPhone());
            employee.setImageUrl(employeeDetails.getImageUrl());
            employee.setEmployeeCode(employeeDetails.getEmployeeCode());
        }
        return employeeRepository.save(employee);
    }   

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}   
