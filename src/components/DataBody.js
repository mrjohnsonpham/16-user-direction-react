import React from "react";

function DataBody(props) {

    return (
        <tr>
            <th scope="row"><img alt={`${props.fullName}`} src={props.thumbnail} /></th>
            <td>{props.fullName}</td>
            <td>{props.address}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
        </tr>
    )
};

export default DataBody;

