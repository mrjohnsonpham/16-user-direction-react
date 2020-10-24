import React from "react";
import TableHeader from "./TableHeader";
import DataBody from "./DataBody";

function DataTable(props) {
    let query = props.query;
    return (
        <div className="header">
            <table className="table">
                <TableHeader
                    orderChange={props.orderChange}
                />
                <tbody>
                    {props.results.sort(props.compareFnc)
                        .filter(data => {
                            const fullName = `${data.name.first} ${data.name.last}`
                            if (!query) {
                                return data
                            } else if (fullName.toLowerCase().includes(query.toLowerCase())) {
                                return data
                            }
                        })
                        .map(employee => (
                            <DataBody
                                thumbnail={employee.picture.thumbnail}
                                fullName={`${employee.name.first} ${employee.name.last}`}
                                address={`${employee.location.street.number} ${employee.location.street.name}`}
                                phone={employee.phone}
                                email={employee.email}
                            />
                        ))}
                </tbody>
            </table>
        </div>
    )
};

export default DataTable;
