import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://localhost:27017/travelEx`);
    console.log(`Mongo Connected...The host is:`, conn.connection.host);
  } catch (error) {
    console.log(error);
  }
};

export default connectdb;
