const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Pending', 'In Progress', 'Completed', 'Leads'], 
    default: 'Pending' 
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium'
  },
  description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);