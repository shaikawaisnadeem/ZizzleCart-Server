import mongoose from 'mongoose';
const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true, lowercase: true },
    password: { type: String, required: true, minLength: 6 }
});
const Login = mongoose.model('Login', LoginSchema);
export default Login;