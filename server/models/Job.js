// models/Job.js
import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  budget: Number,
  deadline: Date,
  paid: { type: Boolean, default: false },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export default mongoose.model('Job', jobSchema);