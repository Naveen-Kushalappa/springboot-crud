import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:8080'

const Employeelist = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        console.log(baseURL, 'baseURL');
        axios.get(`${baseURL}/api/employees`).then((response) => {
            setEmployees(response.data);
        });
    },[])

    const deleteEmployee = (id) => {
        axios.delete(`${baseURL}/api/employees/${id}`);
        setEmployees(employees.filter((employee) => employee.id !== id));
    }

    return (
        <div>
            <h2>Employee list</h2>
            <Link href="/employees/add">Add</Link>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}> 
                     Employee Id: {employee.id} {employee.firstName} - {employee.lastName} Job title {employee.jobTitle} 
                    <Link href={`/edit/${employee.id}`}>Edit</Link>
                    <button onClick={() => deleteEmployee(employee.id)}>Delete</button>  
                    </li>
                    )   
                )}

            </ul>
        </div>
    )

}

export default Employeelist