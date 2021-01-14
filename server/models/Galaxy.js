import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Galaxy = new Schema(
  {
    Name: { type: String, required: true },
    Size: { type: Number, required: true },
    Location: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Galaxy;