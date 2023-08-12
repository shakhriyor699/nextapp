import mongoose from "mongoose";



declare let process: {
  env: {
    MONGO: string
  }
}



const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("Connection failed");
  }
};

export default connect;