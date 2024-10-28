import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectdb from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';

//app config
const app = express();
const port = process.env.PORT || 4080
const localhost = process.env.localHost || '127.0.0.8'
connectdb()
connectCloudinary()

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.get('/', (req, res) => {
    res.send('Hello server');
});

// server start
app.listen(port, () => {
    console.log(`Server started at http://${localhost}:${port}`)
})