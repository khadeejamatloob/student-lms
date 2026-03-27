const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: String,
  instructor: String,
  progress: Number,
});

module.exports = mongoose.model('Course', CourseSchema);