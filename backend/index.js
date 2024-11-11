import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';
import dbConnect from './utils/db.js';
import userRoute from "./routes/user.routes.js";
import companyRoute from "./routes/company.routes.js";
import jobRoute from "./routes/job.routes.js";
import applicationRoute from "./routes/application.routes.js"
import path from "path"
dotenv.config({});

const app = express();
const __dirname = path.resolve()

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get('/home', (req, res) => {
    return res.status(200).json({
        message: "I am coming from backend",
        success: true
    });
});

const corsOptions = {
    // origin: 'https://jobsearch-733g.onrender.com',
    origin: "http://localhost:5173",
    credentials: true
};

app.use(cors(corsOptions));

const port = process.env.PORT || 3000;

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application",applicationRoute);
// app.use("/api/v1/application",applicationRoute);

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(_,res)=>{
    res.sendFile(path.join(__dirname,"/frontend/dist/index.html"))
})

app.listen(port, () => {
    dbConnect();
    console.log(`Server is running at port ${port}`);  // Corrected typo here
});





