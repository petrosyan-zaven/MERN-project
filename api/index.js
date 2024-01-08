import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();
const PORT = 3000;


mongoose.connect(process.env.MONGO).then(()=> {
    console.log('Conected to MongoDB');
})
.catch((err) => {
    console.log(err);
})

const app = express();
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.listen(PORT, () => {
    
    console.log(`Server runinig on port ${PORT}!`);
})