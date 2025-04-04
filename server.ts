import express from "express";
import bodyParser from "body-parser";
import cors from "cors";    
import router from "./src/routes/student";


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", router);
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

