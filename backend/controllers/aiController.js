// const axios = require("axios");

// const aiRecommendation = async (req, res) => {

//     try {

//         const employee = req.body;

//         const prompt = `
        
//         Analyze this employee data:

//         Name: ${employee.name}
//         Department: ${employee.department}
//         Skills: ${employee.skills}
//         Performance Score: ${employee.performanceScore}
//         Experience: ${employee.experience}

//         Give:
//         1. Promotion recommendation
//         2. Training suggestions
//         3. Employee feedback
//         4. Ranking analysis

//         `;

//         const response = await axios.post(

//             "https://openrouter.ai/api/v1/chat/completions",

//             {
//                 model: "openai/gpt-3.5-turbo",

//                 messages: [
//                     {
//                         role: "user",
//                         content: prompt
//                     }
//                 ]
//             },

//             {
//                 headers: {
//                     Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
//                     "Content-Type": "application/json"
//                 }
//             }

//         );

//         res.json({
//             recommendation:
//                 response.data.choices[0].message.content
//         });

//     } catch (error) {

//         console.log(error.response?.data || error.message);

//         res.status(500).json({
//             message: "AI Error"
//         });

//     }

// };

// module.exports = {
//     aiRecommendation
// };


const aiRecommendation = async (req, res) => {

    try {

        const employee = req.body;

        let promotionRecommendation = "";

        let trainingSuggestion = "";

        let feedback = "";

        let ranking = "";



        // Promotion Logic

        if (employee.performanceScore >= 90) {

            promotionRecommendation =
                "Employee is highly eligible for promotion.";

            ranking = "Top Performer";

        }

        else if (employee.performanceScore >= 70) {

            promotionRecommendation =
                "Employee is performing well and can be considered for future promotion.";

            ranking = "Good Performer";

        }

        else {

            promotionRecommendation =
                "Employee currently not eligible for promotion.";

            ranking = "Average Performer";

        }



        // Training Suggestions

        if (
            !employee.skills.includes("Leadership")
        ) {

            trainingSuggestion =
                "Leadership training recommended.";

        }

        else {

            trainingSuggestion =
                "Advanced technical training recommended.";

        }



        // Feedback Generation

        if (employee.performanceScore >= 85) {

            feedback =
                "Excellent work performance and strong contribution to the organization.";

        }

        else if (employee.performanceScore >= 60) {

            feedback =
                "Good performance but improvement in technical and communication skills is recommended.";

        }

        else {

            feedback =
                "Performance improvement required. Regular mentoring and skill development suggested.";

        }



        // Final Response

        res.json({

            employeeName: employee.name,

            promotionRecommendation,

            trainingSuggestion,

            feedback,

            ranking

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

module.exports = {

    aiRecommendation

};