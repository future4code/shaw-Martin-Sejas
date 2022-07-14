import express from "express"; 
import cors from "cors"; 

 let app = express(); 
app.use(cors()); 
app.use(express.json()); 

export default app; 