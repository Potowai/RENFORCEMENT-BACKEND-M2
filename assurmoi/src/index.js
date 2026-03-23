import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to AssurMoi API' });
});

app.post(
    '/api/users',
    [
        body('email').isEmail().withMessage('Invalid email format'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
        body('name').notEmpty().withMessage('Name is required'),
        validate
    ],
    (req, res) => {
        res.json({ message: 'User created successfully', data: req.body });
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
