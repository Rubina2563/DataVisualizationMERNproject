import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from "./routes/client.js";
import salesRoutes from "./routes/sales.js";
import managementRoutes from "./routes/management.js";
import gerenalRoutes from "./routes/gerenal.js";

//data imports
import User from './models/User.js';
import { dataUser } from './data/index.js';

/* BOILER PLATE FOR CONFIGURATION AND SERVER SECURITY*/
dotenv.config();
const app=express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

/*Route managment*/
app.use("/client", clientRoutes);
app.use("/gerenal", gerenalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);


/*mangoDB connection*/
const PORT=process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
//useNewUrlParser: false,
//useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, ()=>console.log(`SERVER PORT:${PORT}`));
    
    /*ONLY ADD DATA ONE TIME*/
   // User.insertMany(dataUser);

}).catch((error)=>console.log(`${error} did not connect`))