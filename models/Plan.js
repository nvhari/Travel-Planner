const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  activities: { type: [String], required: true },
});

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
