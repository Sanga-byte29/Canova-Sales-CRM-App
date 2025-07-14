import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
// import authRouter from './routes/authRoutes.js';



const app = express();
const port = process.env.PORT || 3000;


connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true
}));

// app.use('/api/attendance', attendanceRoutes);
// app.use('/api/leads', leadRoutes);
// app.use('/api/employees', employeeRoutes);
// app.use('/api/calls', callRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/settings', settingsRoutes);

// app.use(errorHandler);

//API Endpoints
app.get('/', (req, res) => res.send("API working"));
// app.use('/api/auth', authRouter);


app.listen(port, ()=>{
    console.log(`Server is running on PORT: ${port}`);
});