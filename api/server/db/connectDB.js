import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected on : ${con.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// Added for mongoose 7 futureproof
mongoose.set('strictQuery', true);
