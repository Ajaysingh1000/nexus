const mongoose = require("mongoose");
const { Schema } = mongoose;

const problemSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  description: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  difficulty: {
    type: String,
    required: true,
    enum: ["easy", "medium", "hard"],
    required: true,
  },
  tags: {
    type: String,
    enum: ["array", "linked list", "graph", "dp"],
    required: true,
  },
  visibleTestCases: [
    {
      input: {
        type: String,
        required: true,
      },
      output: {
        type: String,
        required: true,
      },
      explanation: {
        type: String,
        required: true,
      },
    },
  ],
  hiddenTestCases: [
    {
      input: {
        type: String,
        required: true,
      },
      output: {
        type: String,
        required: true,
      }
    },
  ],
  startCode:[
    {
        language: {
            type: String,
            required: true,
        },
        initialCode: {
            type: String,
            required: true,
        }
    }
  ],
  referenceSolution: [
    {
      language: {
        type: String,
        required: true,
      },
      completeCode: {
        type: String,
        required: true,
      },
    },
  ],
  problemCreator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Problem = mongoose.model("Problem", problemSchema);

module.exports = Problem
