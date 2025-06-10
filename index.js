import express from 'express';
import Run from './Config/db.js';
import signUpRoute from './Auth-SignUp/singup.js';
import loginRoute from './Auth-Login/login.js';
import Signup from './Controller-Signup/SignSchema.js';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json());
await Run();
app.use('/api', signUpRoute);
app.use('/api', loginRoute);

app.get('/users', async (req, res) => {
    try {
        const users = await Signup.find({});  
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err });
    }
});

app.listen(3000, () => {
    console.log(`Server is running on port http://localhost:3000`);
})