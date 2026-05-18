import { useState } from "react";

import API from "../services/api";

function EmployeeForm() {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [department, setDepartment] = useState("");

    const [skills, setSkills] = useState("");

    const [performanceScore, setPerformanceScore] =
        useState("");

    const [experience, setExperience] =
        useState("");



    const handleSubmit = async () => {

        try {

            const token =
                localStorage.getItem("token");

            await API.post(

                "/employees",

                {
                    name,
                    email,
                    department,
                    skills: skills.split(","),

                    performanceScore,

                    experience
                },

                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }

            );

            alert("Employee Added");

        }

        catch (error) {

            console.log(error);

            alert("Error Adding Employee");

        }

    };



    return (

        <div>

            <h2>Add Employee</h2>

            <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                    setName(e.target.value)
                }
            />

            <br /><br />

            <input
                type="email"
                placeholder="Email"
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />

            <br /><br />

            <input
                type="text"
                placeholder="Department"
                onChange={(e) =>
                    setDepartment(e.target.value)
                }
            />

            <br /><br />

            <input
                type="text"
                placeholder="Skills comma separated"
                onChange={(e) =>
                    setSkills(e.target.value)
                }
            />

            <br /><br />

            <input
                type="number"
                placeholder="Performance Score"
                onChange={(e) =>
                    setPerformanceScore(
                        e.target.value
                    )
                }
            />

            <br /><br />

            <input
                type="number"
                placeholder="Experience"
                onChange={(e) =>
                    setExperience(
                        e.target.value
                    )
                }
            />

            <br /><br />

            <button onClick={handleSubmit}>
                Add Employee
            </button>

        </div>

    );

}

export default EmployeeForm;