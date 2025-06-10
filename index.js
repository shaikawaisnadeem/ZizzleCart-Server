import express from 'express';
import Run from './Config/db.js';
import signUpRoute from './Auth-SignUp/singup.js';
import loginRoute from './Auth-Login/login.js';

const app = express();
app.use(express.json());
await Run();
app.use('/api', signUpRoute);
app.use('/api', loginRoute);

app.get('/api/newuser', (req,res)=>{
    res.send('hello world')
})

app.listen(3000, () => {
    console.log(`Server is running on port http://localhost:3000`);
})