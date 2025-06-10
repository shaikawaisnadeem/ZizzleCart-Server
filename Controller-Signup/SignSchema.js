import mongoose from 'mongoose';
const signupSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, lowercase: true},
    password: {type: String, required: true, minLength: 6},
}); 
const Signup = mongoose.model('Signup', signupSchema);
export default Signup;