import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Star = new Schema(
  {
    Name: { type: String, required: true },
    Type: { type: String, required: true },
    Death: { type: Boolean },
    galaxy: { type: ObjectId, ref: "Galaxy", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Star;