import { useRouter } from 'next/router';
import { useState } from 'react'
import axios from "axios";
const baseURL = process.env.BACKEND_BASE_URL;

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        "firstName" : "",
        "lastName": "", 
        "email": "", 
        "employeeCode": "",
        "phone": "",
        "jobTitle": "",
    });
    const router = useRouter();

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post(`${baseURL}/api/employees`, employee);
        router.push('/employees');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="firstName" placeholder='First name' onChange={handleChange}/>
            <input name="lastName" placeholder='Last name' onChange={handleChange}/>
            <input name="email" placeholder='Email' onChange={handleChange}/>
            <input name="jobTitle" placeholder='Job Title' onChange={handleChange}/>
            <input name="employeeCode" placeholder='Employee Code' onChange={handleChange}/>
            <input name="phone" placeholder='Phone' onChange={handleChange}/>
            <button type="submit">Add</button>
        </form>
    )



}


export default AddEmployee