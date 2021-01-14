import StarSchema from "../models/Star"
import GalaxySchema from "../models/Galaxy";
import mongoose from "mongoose";

class DbContext {
  Stars = mongoose.model("Star", StarSchema)
  Galaxies = mongoose.model("Galaxy", GalaxySchema)

}

export const dbContext = new DbContext();
