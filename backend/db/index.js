import mongoose from "mongoose";

const connectTodb = async () => {
  try {
    const conection = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("database connected successfully");
  } catch (error) {
    console.log("Database connection failed!",error.message);
    process.exit(1);
  }
};

export default connectTodb;
