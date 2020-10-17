import React, { useState, useEffect } from "react";
import TableRows from "./TableRows";
import API from "../utils/API";
import './Table.css';

function Table(props) {

    const [employees, setEmployees] = useState([]);

    const [filteredEmployees, setFilteredEmployees] = useState([]);

    const [sorted, setSorted] = useState(false);

    useEffect(() => {
        if (employees.length > 0) {

            const searchedEmployees = employees.filter(employee => {
                if (props.searchTerm === "" || employee.name.first.toLowerCase().includes(props.searchTerm.toLowerCase())) {
                    return true;
                } else {
                    return false;
                }

            })
            setFilteredEmployees(searchedEmployees)
        } else {
            API.getEmployee()
                .then(function (res) {
                    console.log(res);
                    setEmployees(res.data.results);
                })
        }
    }, [props.searchTerm])

    //function for onClick on Name to ascend or descend 
    const handleName = () => {

        if (sorted === false) {
            let employeesCopySorted = employees.slice().sort(compare)
            setEmployees(employeesCopySorted);
            setSorted(true)

        } else {
            let employeesCopyReversed = employees.slice().reverse()
            setEmployees(employeesCopyReversed);
        }

    }

    //compare function for employees, and called above for handleName()
    function compare(a, b) {
        const namesA = a.name.last.toUpperCase();
        const namesB = b.name.last.toUpperCase();

        let comparison = 0;
        if (namesA > namesB) {
            comparison = 1;
        } else if (namesA < namesB) {
            comparison = -1;
        }
        return comparison;
    }

    const employeeList = props.searchTerm ? filteredEmployees : employees

    return (
        <div className="container">
            <br></br>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th id="name" onClick={handleName} scope="col">Name</th>
                        <th scope="col">Phone #</th>
                        <th scope="col">Email</th>
                        <th id="dob" scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map(employee => <TableRows image={employee.picture.thumbnail}
                        name={`${employee.name.first} ${employee.name.last}`}
                        phone={employee.phone}
                        email={employee.email}
                        dob={employee.dob.date}
                    />)}
                </tbody>
            </table>
        </div>
    );
}

export default Table;