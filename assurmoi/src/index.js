import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to AssurMoi API' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
