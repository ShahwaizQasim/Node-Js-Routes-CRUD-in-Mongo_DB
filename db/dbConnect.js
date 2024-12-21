import mongoose from "mongoose";
import 'dotenv/config'

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@lms.fdc0y.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=LMS`;
mongoose.connect(url);

export default mongoose;