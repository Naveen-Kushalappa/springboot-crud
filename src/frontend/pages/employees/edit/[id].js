import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

const baseUrl = 'http://localhost:8080';
const { useEffect, useState } = require('react');

const EditEmployee = () => {
    const router = useRouter();
    const { id } = router.query;

    const [employee, setEmployee] = useState({ firstName: "", lastName: "", email: "", jobTitle: "", employeeCode: "", phone: "" });

    useEffect(() => {
        if (id) {
            axios.get(`${baseUrl}/api/employees/${id}`).then((response) => {
                setEmployee(response.data);
            })
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`${baseUrl}/api/employees/${id}`, employee);
        router.push('/employees')
    }

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Link href="/employees">All employees</Link>

            <form onSubmit={handleSubmit}>
                <input name="firstName" placeholder='First name' value={employee.firstName} onChange={handleChange} />
                <input name="lastName" placeholder='Last name' value={employee.lastName} onChange={handleChange} />
                <input name="email" type='email' placeholder='Email' value={employee.email} onChange={handleChange} />
                <input name="jobTitle" placeholder='Job Title' value={employee.jobTitle} onChange={handleChange} />
                <input name="employeeCode" placeholder='Employee Code' value={employee.employeeCode} onChange={handleChange} />
                <input name="phone" placeholder='Phone' value={employee.phone} onChange={handleChange} />
                <button type="submit">Edit</button>
            </form>
        </>
    )


}

export default EditEmployee;