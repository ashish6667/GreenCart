import express from 'express';

const app = express();
const port = process.env.PORT  || 4000;

app.get('/', (req, res) => res.send("API is Working"));


app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})