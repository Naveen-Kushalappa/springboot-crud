import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Employeelist = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/employees').then((response) => {
            setEmployees(response.data);
        });
    },[])

    const deleteEmployee = (id) => {
        axios.delete(`http://localhost:8080/api/employees/${id}`);
        setEmployees(employees.filter((employee) => employee.id !== id));
    }

    return (
        <div>
            <h2>Employee list</h2>
            <Link href="/add">Add</Link>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}> {employee.firstName} - {employee.lastName}
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