import mongoose from 'mongoose';
const Run = async () => {
    const MONGODB_URL = 'mongodb+srv://awaisn:awais123@cluster0.1pcfw7a.mongodb.net/Userdetails'
    await mongoose.connect(MONGODB_URL).then(() => {
        console.log('Connected to MongoDB');
    })
}
export default Run;