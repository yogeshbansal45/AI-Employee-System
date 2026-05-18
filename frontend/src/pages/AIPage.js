import { useState } from "react";

import API from "../services/api";

function AIPage() {

    const [name, setName] = useState("");

    const [department, setDepartment] =
        useState("");

    const [skills, setSkills] = useState("");

    const [performanceScore,
        setPerformanceScore] =
        useState("");

    const [experience,
        setExperience] =
        useState("");

    const [result, setResult] =
        useState(null);




    const handleAI = async () => {

        try {

            const token =
                localStorage.getItem("token");

            const response = await API.post(

                "/ai/recommend",

                {
                    name,
                    department,

                    skills:
                        skills.split(","),

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

            setResult(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };




    return (

        <div>

            <h2>AI Recommendation</h2>

            <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                    setName(e.target.value)
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
                placeholder="Skills"
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

            <button onClick={handleAI}>
                Generate AI Recommendation
            </button>

            <br /><br />

            {

                result && (

                    <div
                        style={{
                            border: "2px solid green",
                            padding: "15px"
                        }}
                    >

                        <h3>
                            AI Result
                        </h3>

                        <p>
                            Promotion:
                            {
                                result
                                    .promotionRecommendation
                            }
                        </p>

                        <p>
                            Training:
                            {
                                result
                                    .trainingSuggestion
                            }
                        </p>

                        <p>
                            Feedback:
                            {
                                result.feedback
                            }
                        </p>

                        <p>
                            Ranking:
                            {
                                result.ranking
                            }
                        </p>

                    </div>

                )

            }

        </div>

    );

}

export default AIPage;