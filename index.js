import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.get("/me", async (req, res) => {
    try {
        const currentTime = new Date().toISOString();
        const response = await axios.get("https://catfact.ninja/fact", {timeout: 4000});


        const user = {
            email: "awajethro@gmail.com",
            name: "Jethro Awa",
            stack: "Node.js/Express",
        };

        const result = {
            user,
            timestamp: currentTime,
            fact: response.data.fact,
        };

        res.json(result);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const statusCode = error.response.status;
                if (statusCode >= 500) {
                    console.error(`External API Error (${statusCode}):`, error.response.data);
                    return res.status(503).json({ error: "External fact service is currently unavailable." });
                } else if (statusCode >= 400) {
                    console.warn(`External API Error (${statusCode}): Check API endpoint/params.`);
                    return res.status(500).json({ error: "Configuration error with external service." }); 
                }
            } else {
                console.error("External API Network/Timeout Error:", error.message);
                return res.status(503).json({ error: "Connection to external fact service failed." });
            }
        }
        console.error("Unknown Server Error:", error);
        return res.status(500).json({ error: "An unexpected server error occurred." });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});