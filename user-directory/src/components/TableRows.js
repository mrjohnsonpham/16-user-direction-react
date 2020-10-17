import React from 'react';

function TableRows(props) {
    return (
        <tr>
            <td><img src={props.image} alt={props.name}/></td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{new Date(props.dob).toLocaleDateString()}</td>
        </tr>
    )
}

export default TableRows;

