import { useState } from "react";

import API from "../services/api";

function SearchFilter() {

    const [department, setDepartment] =
        useState("");

    const [employees, setEmployees] =
        useState([]);




    const handleSearch = async () => {

        try {

            const token =
                localStorage.getItem("token");

            const response = await API.get(

                `/employees/search?department=${department}`,

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

            <h2>Search Employee</h2>

            <input
                type="text"
                placeholder="Enter Department"
                onChange={(e) =>
                    setDepartment(e.target.value)
                }
            />

            <button onClick={handleSearch}>
                Search
            </button>

            <br /><br />

            {

                employees.map((emp) => (

                    <div
                        key={emp._id}
                        style={{
                            border: "1px solid blue",
                            margin: "10px",
                            padding: "10px"
                        }}
                    >

                        <h3>{emp.name}</h3>

                        <p>
                            {emp.department}
                        </p>

                    </div>

                ))

            }

        </div>

    );

}

export default SearchFilter;