package com.naveen.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "employees")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "first_name", nullable = false)
    private String firstName;
    @Column(name = "last_name", nullable = false)
    private String lastName;
    @Column(name = "email", nullable = false, unique = true)
    private String email;
    @Column(name = "job_title", nullable = false)
    private String jobTitle;
    @Column(name = "phone", nullable = false)
    private String phone;
    @Column(name = "image_url", nullable = true)
    private String imageUrl;
    @Column(name = "employee_code", nullable = true, unique = true)
    private String employeeCode;

}
