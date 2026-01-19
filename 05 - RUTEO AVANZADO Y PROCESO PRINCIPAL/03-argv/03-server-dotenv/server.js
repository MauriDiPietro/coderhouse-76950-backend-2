import express from 'express';
import dotenv from 'dotenv'
import './database.js';

const NODE_ENV = process.argv[2]

dotenv.config({ path: NODE_ENV === 'dev' ? './.env' : './.env.prod' });

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`🚀 Server listening on port ${PORT} in ${NODE_ENV} mode`);
});



