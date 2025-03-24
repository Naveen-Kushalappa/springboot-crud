CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    job_title VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    image_url VARCHAR(255),
    employee_code VARCHAR(255) NOT NULL UNIQUE,
);  