import { useEffect, useState } from "react";

import API from "../services/api";

function EmployeeList() {

    const [employees, setEmployees] =
        useState([]);

    useEffect(() => {

        fetchEmployees();

    }, []);




    const fetchEmployees = async () => {

        try {

            const token =
                localStorage.getItem("token");

            const response = await API.get(

                "/employees",

                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }

            );

            setEmployees(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };




    return (

        <div>

            <h2>Employee List</h2>

            {

                employees.map((emp) => (

                    <div
                        key={emp._id}
                        style={{
                            border: "1px solid black",
                            margin: "10px",
                            padding: "10px"
                        }}
                    >

                        <h3>{emp.name}</h3>

                        <p>
                            Department:
                            {emp.department}
                        </p>

                        <p>
                            Score:
                            {emp.performanceScore}
                        </p>

                    </div>

                ))

            }

        </div>

    );

}

export default EmployeeList;